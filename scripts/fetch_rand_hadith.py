import requests
import json 
from random import randint, choice

def get_random_hadith ():
    books = {
        "bukhari": 7564,
        "muslim": 3023,
        "abudawud": 3998,
        "ibnmajah": 4342,
        "tirmidhi": 3956,
    }
    book = choice(list(books.keys()))
    number = randint(1, books[book])
    try:    
        res = requests.get(f'https://hadithapi.pages.dev/api/{book}/{number}')
        res.raise_for_status()
        data = res.json()
        return {
            "hadith": data["hadith_english"].strip(),
            "narrator": data["header"].strip(),
            "refno": data["refno"].strip()
        }
    except requests.exceptions.RequestException as e:
        print(f"API call failed: {e}, keeping existing hadith.json")

    
with open("../src/lib/data/hadith.json", "w") as f:
    hadith = get_random_hadith()
    if hadith:
        json.dump(hadith, f, ensure_ascii=False, indent=4)
    else:
        print("Skipping file write, keeping existing hadith.json")
