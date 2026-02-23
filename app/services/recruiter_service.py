from app.repositories.conversation_repository import ConversationRepository
from app.services.llm_service import LLMService


class RecruiterService:

    def __init__(self):
        self.llm = LLMService()

    def start_session(self, candidate_name: str):
        return ConversationRepository.create_session(candidate_name)

    def process_candidate_message(self, session_id, message: str):
        ConversationRepository.save_message(session_id, "candidate", message)

        history = ConversationRepository.get_messages(session_id)

        context = "\n".join([f"{m['role']}: {m['content']}" for m in history])

        # response = self.llm.generate_response(context)
        last_candidate_message = message
        response = self.llm.generate_response(
            f"Conversation so far:\n{context}\n\nLast candidate answer:\n{last_candidate_message}"
        )


        ConversationRepository.save_message(session_id, "recruiter", response)

        return response


    def replay_session(self, session_id):
        return ConversationRepository.get_messages(session_id)
