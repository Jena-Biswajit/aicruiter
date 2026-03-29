import sys
import threading
import sounddevice as sd
from deepgram import DeepgramClient, LiveTranscriptionEvents, LiveOptions
from config import DEEPGRAM_API_KEY

dg_client = DeepgramClient(DEEPGRAM_API_KEY)

def get_transcription():
    transcript_accumulator = []
    stop_event = threading.Event()
    
    try:
        dg_connection = dg_client.listen.live.v("1")

        def on_message(self, result, **kwargs):
            sentence = result.channel.alternatives[0].transcript
            if len(sentence) == 0:
                return
            if result.is_final:
                print(f"  -> {sentence}", end='\r', flush=True)
                transcript_accumulator.append(sentence)

        def on_utterance_end(self, utterance_end, **kwargs):
            if len(transcript_accumulator) > 0:
                print("\n[Silence Detected]")
                stop_event.set()

        def on_error(self, error, **kwargs):
            print(f"\nDP Error: {error}")

        dg_connection.on(LiveTranscriptionEvents.Transcript, on_message)
        dg_connection.on(LiveTranscriptionEvents.UtteranceEnd, on_utterance_end)
        dg_connection.on(LiveTranscriptionEvents.Error, on_error)

        options = LiveOptions(
            model="nova-2-general", 
            language="en-US",
            smart_format=True, 
            encoding="linear16",
            channels=1,
            sample_rate=16000,
            interim_results=True,
            utterance_end_ms=2500, 
            vad_events=True,
            endpointing=1500,
            keywords=["Biswajit:2", "recruiter:1", "React:1", "API:1"]
        )

        if not dg_connection.start(options):
            print("Failed to start Deepgram connection")
            return ""

        print("\n🎤 Listening... (Speak now)")

        def callback(indata, frames, time, status):
            if status:
                print(status, file=sys.stderr)
            try:
                if stop_event.is_set():
                    return
                dg_connection.send(indata.tobytes())
            except Exception:
                pass

        with sd.InputStream(samplerate=16000, channels=1, dtype='int16', callback=callback):
            stop_event.wait()

        dg_connection.finish()
        
    except Exception as e:
        print(f"Transparency Error: {e}")
        return ""

    full_text = " ".join(transcript_accumulator).strip()
    return full_text