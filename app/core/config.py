import os
from dotenv import load_dotenv

load_dotenv()


class Settings:
    DB_HOST = os.getenv("DB_HOST")
    DB_NAME = os.getenv("DB_NAME")
    DB_USER = os.getenv("DB_USER")
    DB_PASSWORD = os.getenv("DB_PASSWORD")
    GROQ_API_KEY = os.getenv("GROQ_API_KEY")
    DEEPGRAM_API_KEY = os.getenv("DEEPGRAM_API_KEY")

    @classmethod
    def validate(cls):
        missing = []
        for attr in ["DB_HOST", "DB_NAME", "DB_USER", "DB_PASSWORD", "GROQ_API_KEY"]:
            if getattr(cls, attr) is None:
                missing.append(attr)
        if missing:
            raise ValueError(f"Missing environment variables: {missing}")
