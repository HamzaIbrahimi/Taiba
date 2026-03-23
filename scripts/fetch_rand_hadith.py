import requests
import json 
from random import randint, choice

'''
The API used for this website is provided for free by (HadeethEnc.com) API
HadeethEnc is a project that aims to provide simplified explanations and clear translation 
of the authentic Prophetic (Prophet Muhammad ﷺ) hadiths.
---------------------------------------------------------------------------
If you will use the API make sure you adhere to the following conditions:

"Contents of the project can be used, with the following terms and conditions:
1. No modification, addition, or deletion of the content.
2. Clearly referring to the publisher and the source (HadeethEnc.com)."
'''

def get_random_hadith ():
  
    try:    
        categories_url = "https://hadeethenc.com/api/v1/categories/list/?language=da"
        available_danish_categories = list(map(lambda x: x['id'],requests.get(categories_url).json()))
        random_category = choice(available_danish_categories)
        get_random_category = requests.get(f'https://hadeethenc.com/api/v1/hadeeths/list/?language=da&category_id={random_category}').json()
        hadith_ids_from_category = list(map(lambda x: x['id'], get_random_category["data"]))
        random_hadith_id = choice(hadith_ids_from_category)
        get_random_hadith = requests.get(f"https://hadeethenc.com/api/v1/hadeeths/one/?language=da&id={random_hadith_id}").json()
        return get_random_hadith
        
        
    except requests.exceptions.RequestException as e:
        print(f"API call failed: {e}, keeping existing hadith.json")


with open("src/lib/data/hadith.json", "w") as f:
    hadith = get_random_hadith()
    if hadith:
        json.dump(hadith, f, ensure_ascii=False, indent=4)
        print('****** JSON file successfully created in src/lib/data/hadith.json ******')
    else:
        print("Skipping file write, keeping existing hadith.json")
