import psycopg2
from psycopg2.extras import RealDictCursor
from app.core.config import Settings


def get_connection():
    return psycopg2.connect(
        host=Settings.DB_HOST,
        database=Settings.DB_NAME,
        user=Settings.DB_USER,
        password=Settings.DB_PASSWORD,
        cursor_factory=RealDictCursor
    )
