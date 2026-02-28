import threading
import queue
import sounddevice as sd

audio_playback_queue = queue.Queue()

def start_global_player():
    def player_loop():
        try:
            stream = sd.OutputStream(samplerate=44100, channels=1, dtype='int16')
            stream.start()
            while True:
                chunk = audio_playback_queue.get()
                if chunk is None: break
                stream.write(chunk)
                audio_playback_queue.task_done()
            stream.stop()
            stream.close()
        except Exception as e:
            print(f"Global Player Error: {e}")

    t = threading.Thread(target=player_loop, daemon=True)
    t.start()
    return t