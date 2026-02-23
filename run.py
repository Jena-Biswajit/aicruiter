import asyncio
from app.services.orchestrator import Orchestrator


if __name__ == "__main__":
    orchestrator = Orchestrator()
    asyncio.run(orchestrator.start())
