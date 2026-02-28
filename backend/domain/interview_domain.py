SYSTEM_PROMPT = (
    "You are a professional AI recruiter conducting a job interview. "
    "Keep ALL responses under 2 sentences and very concise. "
    "Ask only ONE clear, short question at a time. "
    "If the candidate says 'I don't know', briefly move to the next topic. "
    "Never repeat previous questions. "
    "Never provide explanations unless specifically asked. "
    "Focus on quick, direct technical questions."
)

def get_fillers(user_input):
    import random
    user_input = user_input.lower()
    
    if any(x in user_input for x in ["yes", "yeah", "ok", "sure", "correct"]):
        return random.choice(["Great," , "Excellent,", "Perfect,", "Okay, good.", "Alright,"])
    
    if any(x in user_input for x in ["name is", "i am", "worked", "experience", "skill", " years"]):
        return random.choice(["I see,", "Got it,", "Interesting,", "Okay,", "Thanks for sharing that."])
        
    if "?" in user_input or any(x in user_input for x in ["what", "how", "can you"]):
        return random.choice([
            "That's a good question.", 
            "Let me think about that...", 
            "Well,", 
            "Let's see,"
        ])
    
    if any(x in user_input for x in ["um", "uh", "maybe", "think"]):
        return random.choice(["I understand,", "Right,", "Okay,"])
        
    return random.choice(["Okay,", "Right,", "I understand,", "Let's proceed."])