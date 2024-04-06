import requests

url = 'http://127.0.0.1:8000/orders'
headers = {
    'accept': 'application/json',
}
params = {
    'product': 'laptop',
    'units': '1'
}

response = requests.post(url, headers=headers, params=params)

print(response.json())