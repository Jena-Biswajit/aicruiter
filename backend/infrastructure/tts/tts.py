import os
import threading
import queue
import numpy as np
import requests
from infrastructure.audio.global_player import audio_playback_queue

def speak_text(text_iterator, quick_start=False):
    tts_queue = queue.Queue()
    state = {"generating": True}

    def tts_worker():
        session = requests.Session()
        url = "https://api.cartesia.ai/tts/bytes"
        headers = {
            "X-API-Key": os.getenv("CARTESIA_API_KEY"),
            "Cartesia-Version": "2024-06-10",
            "Content-Type": "application/json"
        }
        voice_id = os.getenv("CARTESIA_VOICE_ID", "79a125e8-cd45-4c13-8a67-188112f4dd22")

        while True:
            try:
                text = tts_queue.get(timeout=0.1)
            except queue.Empty:
                if not state["generating"]: break
                continue
            
            try:
                payload = {
                    "model_id": "sonic-english",
                    "transcript": text,
                    "voice": {"mode": "id", "id": voice_id, "__experimental_controls": {"speed": "normal", "emotion": ["positivity:high"]}},
                    "output_format": {"container": "raw", "encoding": "pcm_s16le", "sample_rate": 44100}
                }
                resp = session.post(url, json=payload, headers=headers, stream=True)
                if resp.status_code == 200:
                    data = np.frombuffer(resp.content, dtype=np.int16)
                    audio_playback_queue.put(data)
                else:
                    print(f"[TTS {resp.status_code}]", end="")
            except Exception as e:
                print(f"[TTS Err: {e}]", end="")
            finally:
                tts_queue.task_done()

    t_tts = threading.Thread(target=tts_worker, daemon=True)
    t_tts.start()

    try:
        buffer = ""
        for chunk in text_iterator:
            if not chunk: continue
            buffer += chunk
            
            if (len(buffer) > 15 and buffer[-1] in ".?!:,;\n") or (quick_start and len(buffer) > 2):
                tts_queue.put(buffer)
                buffer = ""
                quick_start = False
        
        if buffer.strip(): tts_queue.put(buffer)
    except Exception as e:
        print(f"\nGen Error: {e}")
    finally:
        state["generating"] = False
        t_tts.join(timeout=5.0)