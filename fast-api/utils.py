import openai
import os
from dotenv import load_dotenv

load_dotenv()

# Now you can access your environment variables using os.getenv
debug = os.getenv('DEBUG')
secret_key = os.getenv('SECRET_KEY')

openai.api_key = secret_key

def generate_description(input):
    
    messages = [
        {"role": "user",
         "content": """As an expert, generate bullet points from the provided text' \n"""},
    ]

    messages.append({"role": "user", "content": f"{input}"})
    completion = openai.ChatCompletion.create(
        model="gpt-4",
        messages=messages
    )
    reply = completion.choices[0].message.content
    return reply
