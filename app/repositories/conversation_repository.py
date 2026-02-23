from app.core.database import get_connection


class ConversationRepository:

    @staticmethod
    def create_session(candidate_name: str):
        conn = get_connection()
        try:
            with conn:
                with conn.cursor() as cur:
                    cur.execute(
                        "INSERT INTO sessions (candidate_name) VALUES (%s) RETURNING id;",
                        (candidate_name,),
                    )
                    return cur.fetchone()["id"]
        finally:
            conn.close()

    @staticmethod
    def save_message(session_id, role: str, content: str):
        conn = get_connection()
        try:
            with conn:
                with conn.cursor() as cur:
                    cur.execute(
                        """
                        INSERT INTO messages (session_id, role, content)
                        VALUES (%s, %s, %s);
                        """,
                        (session_id, role, content),
                    )
        finally:
            conn.close()

    @staticmethod
    def get_messages(session_id):
        conn = get_connection()
        try:
            with conn:
                with conn.cursor() as cur:
                    cur.execute(
                        "SELECT role, content FROM messages WHERE session_id = %s ORDER BY created_at;",
                        (session_id,),
                    )
                    return cur.fetchall()
        finally:
            conn.close()
