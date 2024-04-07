from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel
from utils import summarize_pdf, scrape_pdf
from pdf_converter import scrape_pdf_url

app = FastAPI()

class Article(BaseModel):
    url: str
    complexity: str # elementary schooler, middle schooler, high schooler, college student
    mode: str # bullet point summary, summary, discussion questions

@app.post("/article_summary")
async def generate_article_summary(article: Article):
    pdf_url = scrape_pdf_url(article.url)
    summary = summarize_pdf(scrape_pdf(pdf_url), article.mode, article.complexity)
    return {"article_summary": summary}
    pass

@app.get("/ok")
async def ok_endpoint():
    return {"message": "ok"}

@app.get("/hello")
async def hello_endpoint(name: str = 'World'):
    return {"message": f"Hello, {name}!"}



