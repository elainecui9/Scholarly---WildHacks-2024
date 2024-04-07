# given a DOI download PDF/obtain the actual article text

# article element --> scrape those elements 

# using pypandoc to convert pdfs into markdown

# (URL/DOI, difficulty, format) -> text 

# using beautiful soup scrape meta element with name: citation url 
#citation_pdf_url

from bs4 import BeautifulSoup
from urllib.request import Request, urlopen
import re
import requests

def scrape_pdf_url(url):
    response = requests.get(url)

    if response.status_code == 200:
        soup = BeautifulSoup(response.content, 'html.parser')

        citation_meta = soup.find('meta', {'name' : 'citation_pdf_url'})

        if citation_meta:
            citation_url = citation_meta['content']
            return citation_url
        else:
            return "Citation URL not found"
    else:
        return "Failed to retrieve the webpage."
    
