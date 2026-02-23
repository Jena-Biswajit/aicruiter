import asyncio
import pyaudio
import requests
import wave
import io
from app.core.config import Settings


class STTService:
    def __init__(self, transcript_queue: asyncio.Queue):
        self.transcript_queue = transcript_queue
        self.api_key = Settings.DEEPGRAM_API_KEY
        self.sample_rate = 16000
        self.channels = 1
        self.chunk = 1024
        self.record_seconds = 7

    def record_audio(self):
        p = pyaudio.PyAudio()
        stream = p.open(format=pyaudio.paInt16,
                        channels=self.channels,
                        rate=self.sample_rate,
                        input=True,
                        frames_per_buffer=self.chunk)

        print("🎤 Listening... Speak now.")

        frames = []
        for _ in range(int(self.sample_rate / self.chunk * self.record_seconds)):
            frames.append(stream.read(self.chunk))

        stream.stop_stream()
        stream.close()
        p.terminate()

        buffer = io.BytesIO()
        wf = wave.open(buffer, 'wb')
        wf.setnchannels(self.channels)
        wf.setsampwidth(p.get_sample_size(pyaudio.paInt16))
        wf.setframerate(self.sample_rate)
        wf.writeframes(b''.join(frames))
        wf.close()
        buffer.seek(0)

        return buffer.read()

    def transcribe(self, audio_data):
        url = "https://api.deepgram.com/v1/listen"
        headers = {
            "Authorization": f"Token {self.api_key}",
            "Content-Type": "audio/wav"
        }

        response = requests.post(url, headers=headers, data=audio_data)

        if response.status_code == 200:
            result = response.json()
            return result["results"]["channels"][0]["alternatives"][0]["transcript"]

        return None

    async def listen_once(self):
        loop = asyncio.get_running_loop()

        audio = await loop.run_in_executor(None, self.record_audio)
        transcript = await loop.run_in_executor(None, self.transcribe, audio)

        if transcript and transcript.strip():
            await self.transcript_queue.put(transcript.strip())
