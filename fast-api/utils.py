import os
import anthropic
import requests
from dotenv import load_dotenv
from IPython.display import Markdown, display
from anthropic import HUMAN_PROMPT, AI_PROMPT
import PyPDF2
import io

load_dotenv()

client = anthropic.Anthropic(
    api_key = os.getenv("ANTHROPIC_API_KEY")
)

def summarize_pdf(pdf_text, mode, complexity):
    
    Prompt = "create " + mode + "of the following article" + pdf_text + "at the reading level of a " + complexity
    
    message = client.messages.create(
        model="claude-2.1",
        max_tokens=1024,
        #system=instructions,
        messages=[
            {"role": "user", "content": Prompt} 
        ]
    )
    
    return Markdown(message.content[0].text)

def scrape_pdf(url):

    response = requests.get(url)
    f = io.BytesIO(response.content)
    reader = PyPDF2.PdfReader(f)
    pages = reader.pages
    # get all pages data
    text = "".join([page.extract_text() for page in pages])
    return text
