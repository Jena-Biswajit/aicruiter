

from langchain_groq import ChatGroq
from langchain_core.prompts import ChatPromptTemplate
from app.core.config import Settings


class LLMService:

    def __init__(self):
        self.chat = ChatGroq(
            temperature=0.2,
            model_name="openai/gpt-oss-20b",
            groq_api_key=Settings.GROQ_API_KEY,
        )

    def generate_response(self, conversation_history: str) -> str:
        prompt = ChatPromptTemplate.from_messages([
            ("system",
             """You are a senior AI technical recruiter.

Rules:
1. Ask ONLY one question at a time.
2. Base your next question strictly on the candidate's last answer.
3. If candidate mentions specific technology, ask deeper question about that technology.
4. First acknowledge briefly (1 short sentence).
5. Then ask next technical question.
6. Do not use bullet points.
7. Do not start with stars or special characters.
8. Keep question concise and professional.
"""),
            ("human", "{input}")
        ])

        chain = prompt | self.chat
        result = chain.invoke({"input": conversation_history})
        return result.content.strip()
