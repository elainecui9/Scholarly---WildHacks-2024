import os
import anthropic
import requests
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv('OPUS_API_KEY')
anthropic_client = anthropic.Client(api_key)

def summarize_pdf(pdf_url):

    api_endpoint = "https://api.openai.com/v1/engines/claude/completions"

    params = {
        "prompt" : f"summarize the contents of the pdf at {pdf_url}",
        "max_tokens": 1000,
        "temperature": 0.7,
        "stop": ["###"]
    }

    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {api_key}"
    }

    response = requests.post(api_endpoint, json=params,headers=headers)

    if response.status_code == 200:
        data = response.json()
        summary = data["choices"][0]["text"].strip()
        return summary
    else:
        return f"Failed to generate summary. Status code: {response.status_code}"

