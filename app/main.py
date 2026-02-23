from app.core.config import Settings
from app.services.recruiter_service import RecruiterService


def main():
    Settings.validate()

    recruiter = RecruiterService()

    name = input("Candidate Name: ")
    session_id = recruiter.start_session(name)

    print(f"Session started: {session_id}")

    while True:
        msg = input("\nYou: ")
        if msg.lower() == "exit":
            break

        reply = recruiter.process_candidate_message(session_id, msg)
        print(f"\nAI Recruiter: {reply}")

    print("\nSession saved.")


if __name__ == "__main__":
    main()
