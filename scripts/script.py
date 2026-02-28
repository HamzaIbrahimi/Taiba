import csv
import json

prayer_times = {}

with open ('times.csv', 'r') as file:
    #prayer keys : Dhuhr Adhan,Asr Adhan,Maghrib Adhan,Isha Adhan
    reader = csv.DictReader(file)
    for row in reader:
        key = f"{row["Day"]}-{row["Month"]}"
        prayer_times[key] = {
            "fajr": row["Fajr Adhan"],
            "dhuhr": row["Dhuhr Adhan"],
            "asr": row["Asr Adhan"],
            "maghrib": row["Maghrib Adhan"],
            "isha": row["Isha Adhan"]
        }


with open ('../src/lib/data/times.json', "w", encoding='utf-8') as file:
# Turns the dict into a json file and outputs it to file
    json.dump(prayer_times, file, ensure_ascii=False, indent=4)
