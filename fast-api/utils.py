import os
import anthropic
import requests
from dotenv import load_dotenv
from IPython.display import Markdown, display
from anthropic import HUMAN_PROMPT, AI_PROMPT
import PyPDF2
import io

load_dotenv()

# client = anthropic.Anthropic(os.getenv("ANTHROPIC_API_KEY"))
client = anthropic.Anthropic(
    api_key = os.getenv("ANTHROPIC_API_KEY")
)



def summarize_pdf(pdf_text):
    
    Prompt = "summarize the following article" + pdf_text
    #instructions = f"level of  diffculty..."
    message = client.messages.create(
        model="claude-3-opus-20240229",
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
