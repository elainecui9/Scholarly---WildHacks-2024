from typing import Union

from fastapi import FastAPI
from pydantic import BaseModel
from utils import summarize_pdf, scrape_pdf
from pdf_converter import scrape_pdf_url

app = FastAPI()

class Article(BaseModel):
    url: str
    difficulty: str
    mode: str

@app.post("/article_summary")
async def generate_article_summary(article: Article):
    pdf_url = scrape_pdf_url(article.url)
    summary = summarize_pdf(scrape_pdf(pdf_url))
    return {"article_summary": summary}

@app.get("/ok")
async def ok_endpoint():
    return {"message": "ok"}

@app.get("/hello")
async def hello_endpoint(name: str = 'World'):
    return {"message": f"Hello, {name}!"}

"""

class Order(BaseModel):
    product: str
    units: int

class Product(BaseModel):
    name: str
    notes: str

@app.post("/orders")
async def place_order(product: str, units: int):
    return {"message": f"Order for {units} units of {product} placed successfully."}

@app.post("/orders_pydantic")
async def place_order(order: Order):
    return {"message": f"Order for {order.units} units of {order.product} placed successfully."}

@app.post("/product_description")
async def generate_product_description(product: Product):
    description = generate_description(f"Product name: {product.name}, Notes: {product.notes}")
    return {"product_description": description}

class Item(BaseModel):
    name: str
    price: float
    is_offer: Union[bool, None] = None

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
    return {"item_price": item.price, "item_id": item_id}
"""

