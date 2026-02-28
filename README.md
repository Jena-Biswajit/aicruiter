# aicruiter-backend

# AI Recruiter — Real-Time Voice Interview Agent

A sophisticated voice-powered AI interviewer that conducts real-time technical interviews using speech recognition, intelligent reasoning, and natural voice synthesis.

The system simulates a human interviewer by asking questions, listening to responses, handling thinking pauses, managing silence scenarios, and progressing through interview topics autonomously.

---

# Features

 **Real-Time Speech Recognition** — Continuous speech-to-text using Deepgram streaming API
 **AI-Powered Interview Logic** — Intelligent questioning and responses using Groq LLaMA models
 **Natural Voice Synthesis** — High-quality text-to-speech via Cartesia TTS
 **Adaptive Silence Handling** — Detects candidate thinking pauses vs no-response scenarios
 **Scenario-Based Interview Flow** — Dynamic branching for response/no-response cases
 **Streaming Audio Pipeline** — Low-latency processing for real-time conversation
 **Modular Architecture** — Clean separation of domain, services, and infrastructure
 **Orchestrated Interview Controller** — State-driven interview progression

---

# Prerequisites

## Software

* Python 3.10+
* pip package manager

## Hardware

* Microphone
* Speakers or headphones
* Stable internet connection

## API Keys Required

| Service  | Purpose        |
| -------- | -------------- |
| Deepgram | Speech-to-Text |
| Groq     | LLM reasoning  |
| Cartesia | Text-to-Speech |

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
cd ai_recruiter
```

## Create Virtual Environment

```bash
python -m venv venv
# Windows
venv\Scripts\activate
# macOS/Linux
source venv/bin/activate
```

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

# Configuration

## Environment Variables

Create `.env` in project root:

```
DEEPGRAM_API_KEY=your_deepgram_key
GROQ_API_KEY=your_groq_key
CARTESIA_API_KEY=your_cartesia_key
CARTESIA_VOICE_ID=your_voice_id
```

---

# Usage

## Run Main Application

```bash
python src/main.py
```

The system will:

1. Greet the candidate
2. Ask interview questions
3. Listen for responses
4. Handle pauses intelligently
5. Move to next topics automatically

---

# Project Structure

```
ai_recruiter/
│
├──  main.py                # Entry point
│  
│
├── domain/
│   └── interview_domain.py   # Interview rules & prompts
│
├── services/
│   └── orchestrator_service.py # Interview controller
│
├── infrastructure/
│   ├── audio/
│   │   └── global_player.py  # Audio playback engine
│   │
│   ├── stt/
│   │   └── stt.py            # Speech-to-text engine
│   │
│   ├── tts/
│   │   └── tts.py            # Text-to-speech engine
│   │
│   └── llm/
│       └── llm.py            # LLM integration
│
├── interfaces/
│   └── console_app.py        # Console interface
│
├── config.py                 # Configuration loader
├── .env                      # Environment variables
└── requirements.txt          # Dependencies
```

---

# Architecture Overview

## Core Components

### STT Engine (`infrastructure/stt/stt.py`)

Handles real-time speech recognition:

* Microphone input streaming
* Silence detection
* Pause analysis
* Transcript generation

---

### LLM Engine (`infrastructure/llm/llm.py`)

Generates interviewer responses:

* Question generation
* Context-aware replies
* Conversation continuity

---

### TTS Engine (`infrastructure/tts/tts.py`)

Synthesizes voice output:

* Streaming audio generation
* Playback queue management
* Voice configuration

---

### Orchestrator Service (`services/orchestrator_service.py`)

Controls interview flow:

* Scenario selection (response vs silence)
* Pause handling logic
* Question progression
* Conversation state management

---

# Interview Flow Logic

## Scenario 1 — Candidate Responds

1. Detect speech till silent ditect
2. Capture answer via STT
3. Detect thinking pauses
4. Prompt encouragement if needed
5. Move to next question on silence

---

## Scenario 2 — No Response

1. No speech detected within 10 seconds
2. Ask confirmation question
3. If still silent → implicit pass
4. Proceed to next topic

---

# Audio Processing Pipeline

```
User Speech
   ↓
STT (Deepgram)
   ↓
Orchestrator Logic
   ↓
LLM (Groq)
   ↓
TTS (Cartesia)
   ↓
Audio Output
```

---

# API Requirements

## Deepgram API

* Live Speech-to-Text
* Streaming transcription

## Groq API

* LLM inference
* Interview reasoning

## Cartesia API

* Neural text-to-speech
* Voice streaming

---

# Troubleshooting

## Audio Issues

No microphone detected:

```
python -m sounddevice
```

Ensure correct input device is selected.

---

## API Errors

* Verify `.env` keys
* Check internet connection
* Confirm API quotas

---

## Dependency Issues

Reinstall:

```
pip install --upgrade pip
pip install -r requirements.txt
```

---

# Development Status

🟡 Active Development

## Completed

* Core interview engine
* Speech recognition
* Voice synthesis
* Scenario logic

## Planned

* Web interface
* Video interview support
* Candidate scoring
* Cloud deployment

---

# Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Submit pull request

---

# Acknowledgments

* Deepgram — Real-time speech recognition
* Groq — High-performance LLM inference
* Cartesia — Neural voice synthesis
* Python audio ecosystem

---

# License

Internal / Personal Project

---

# Author

Built as an advanced learning project for real-time conversational AI systems.
