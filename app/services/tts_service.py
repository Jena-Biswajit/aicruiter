import subprocess
import requests
import shutil
from app.core.config import Settings


class TTSService:

    def __init__(self):
        if not shutil.which("ffplay"):
            raise ValueError("ffplay not installed")

    def speak(self, text: str):
        url = f"https://api.deepgram.com/v1/speak?model=aura-2-thalia-en&encoding=linear16&sample_rate=24000"

        headers = {
            "Authorization": f"Token {Settings.DEEPGRAM_API_KEY}",
            "Content-Type": "application/json"
        }

        player = subprocess.Popen(
            ["ffplay", "-autoexit", "-", "-nodisp"],
            stdin=subprocess.PIPE,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL
        )

        with requests.post(url, stream=True, headers=headers, json={"text": text}) as r:
            for chunk in r.iter_content(chunk_size=4096):
                if chunk:
                    player.stdin.write(chunk)

        if player.stdin:
            player.stdin.close()

        player.wait()
