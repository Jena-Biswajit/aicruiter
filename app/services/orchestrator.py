

import asyncio
import time
from app.services.stt_service import STTService
from app.services.tts_service import TTSService
from app.services.recruiter_service import RecruiterService


class Orchestrator:

    def __init__(self):
        self.queue = asyncio.Queue()
        self.stt = STTService(self.queue)
        self.tts = TTSService()
        self.recruiter = RecruiterService()
        self.session_id = None
        self.interview_duration = 300  # 5 minutes

    async def start(self):

        intro = "Welcome to the AI interview. Please tell me your name."
        self.tts.speak(intro)
        print("AI Recruiter:", intro)
        

        # await self.stt.listen_once()
        # name = await self.queue.get()
        await self.stt.listen_once()
        name = await self.queue.get()
        name = name.replace("my name is", "").strip().title()


        # confirm = f"Did you say your name is {name}?"
        # self.tts.speak(confirm)
        # print("AI Recruiter:", confirm)

        # await self.stt.listen_once()
        # confirmation = await self.queue.get()

        # if "no" in confirmation.lower():
        #     self.tts.speak("Please repeat your name.")
        #     await self.stt.listen_once()
        #     name = await self.queue.get()


        self.session_id = self.recruiter.start_session(name)

        reply = f"Nice to meet you {name}. Let's begin the interview. Tell me about yourself."
        print("AI Recruiter:", reply)
        self.tts.speak(reply)

        start_time = time.time()

        while time.time() - start_time < self.interview_duration:

            await self.stt.listen_once()
            candidate_message = await self.queue.get()

            print("Candidate:", candidate_message)

            reply = self.recruiter.process_candidate_message(
                self.session_id,
                candidate_message
            )

            print("AI Recruiter:", reply)
            self.tts.speak(reply)

        closing = "The interview time is over. Thank you for your time."
        print("AI Recruiter:", closing)
        self.tts.speak(closing)
