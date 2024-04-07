from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel
from utils import summarize_pdf, scrape_pdf
from pdf_converter import scrape_pdf_url
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    'http://localhost:4000'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Article(BaseModel):
    url: str
    complexity: str # elementary schooler, middle schooler, high schooler, college student
    mode: str # bullet point summary, summary, discussion questions

@app.post("/article_summary")
async def generate_article_summary(article: Article):
    print("ASDASD")
    pdf_url = scrape_pdf_url(article.url)
    # summary = summarize_pdf(scrape_pdf(pdf_url), article.mode, article.complexity)
    summary = 'Here are bullet points summarizing the key information from the article:\n\n- Type: Editorial\n- Published: 17 October 2022\n- DOI: 10.3389/fpsyg.2022.0103988\n- Open access article\n- Edited and reviewed by Florin Dolcos, University of Illinois at Urbana-Champaign\n- Correspondence: Anita Cservenka, Oregon State University\n- Specialty section: Emotion Science\n- Received: 08 September 2022\n- Accepted: 14 September 2022 \n- Focuses on the relationship between cannabis use and emotion processing\n- Studies suggest cannabis use is linked to differences in emotion recognition and brain activity compared to controls\n- Articles in this topic examine role of cannabis use disorder, stress, and emotion regulation on emotion processing\n- Findings highlight need to consider individual differences like sex, comorbidities, stress type and valence in future research\n- More research needed to inform prevention, intervention, and treatment approaches targeting cannabis use and emotion'
    return {"article_summary": summary}

@app.get("/ok")
async def ok_endpoint():
    return {"message": "ok"}

@app.get("/hello")
async def hello_endpoint(name: str = 'World'):
    return {"message": f"Hello, {name}!"}



