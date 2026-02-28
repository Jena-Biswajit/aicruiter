from infrastructure.stt.stt import get_transcription
from infrastructure.llm.llm import get_llm_response
from infrastructure.tts.tts import speak_text
from domain.interview_domain import SYSTEM_PROMPT, get_fillers
import threading

def run_interview():
    print("\n=== AI Recruiter (Advanced Streaming) ===")
    
    messages = [{"role": "system", "content": SYSTEM_PROMPT}]
    
    intro_text = "Hello! Thank you for joining me. Could you please introduce yourself?"
    speak_text(iter([intro_text]))
    messages.append({"role": "assistant", "content": intro_text})

    while True:
        try:
            user_text = get_transcription()
            
            if not user_text:
                print("... No speech detected, listening again ...")
                continue
                
            print(f"\n🧍 You: {user_text}")
            messages.append({"role": "user", "content": user_text})

            filler = get_fillers(user_text)
            print(f"🤖 AI: {filler}", end=" ", flush=True)
            
            def play_filler():
                speak_text(iter([filler]), quick_start=True)
            
            filler_thread = threading.Thread(target=play_filler)
            filler_thread.start()
            
            response_generator = get_llm_response(messages)
            
            full_llm_response = ""
            def response_wrapper():
                nonlocal full_llm_response
                for chunk in response_generator:
                    print(chunk, end="", flush=True) 
                    full_llm_response += chunk
                    yield chunk

            speak_text(response_wrapper())
            filler_thread.join()

            final_text = f"{filler} {full_llm_response}"
            messages.append({"role": "assistant", "content": final_text})
            
            print("")

        except KeyboardInterrupt:
            print("\n\nExiting...")
            break
        except Exception as e:
            print(f"\nLoop Error: {e}")
            break