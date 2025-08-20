import json
import random
from datetime import datetime, timedelta

# ---------- Fill these with real ObjectId strings before running ----------
request_ids = [
    "64c96f7cdb2e2f1a9c766410", "64c96f7cdb2e2f1a9c766411", "64c96f7cdb2e2f1a9c766412",
    "64c96f7cdb2e2f1a9c766413", "64c96f7cdb2e2f1a9c766414", "64c96f7cdb2e2f1a9c766415",
    "64c96f7cdb2e2f1a9c766416", "64c96f7cdb2e2f1a9c766417", "64c96f7cdb2e2f1a9c766418",
    "64c96f7cdb2e2f1a9c766419", "64c96f7cdb2e2f1a9c76641a", "64c96f7cdb2e2f1a9c76641b",
    "64c96f7cdb2e2f1a9c76641c", "64c96f7cdb2e2f1a9c76641d", "64c96f7cdb2e2f1a9c76641e",
    "64c96f7cdb2e2f1a9c76641f", "64c96f7cdb2e2f1a9c766420", "64c96f7cdb2e2f1a9c766421",
    "64c96f7cdb2e2f1a9c766422", "64c96f7cdb2e2f1a9c766423"
]

mentee_ids = [
   "64c06f7cdb2e2f1a0c765512",  
 "64c06f7cdb2e2f1a0c765513"  , 
 "64c06f7cdb2e2f1a0c765514" ,  
 "64c06f7cdb2e2f1a0c765515",   
 "64c06f7cdb2e2f1a0c765516" ,  
 "64c06f7cdb2e2f1a0c765517"  , 
 "64c06f7cdb2e2f1a0c765518"  , 
 "64c06f7cdb2e2f1a0c765519"  , 
 "64c06f7cdb2e2f1a0c765510"  , 
 "64c06f7cdb2e2f1a0c76551a"  , 
 "64c06f7cdb2e2f1a0c76551b"  , 
 "64c06f7cdb2e2f1a0c76551c"  , 
 "64c06f7cdb2e2f1a0c76551d"   ,
 "64c06f7cdb2e2f1a0c76551e"  , 
 "64c06f7cdb2e2f1a0c76551f"  , 
 "64c06f7cdb2e2f1a0c765520" ,  
 "64c06f7cdb2e2f1a0c765521" ,  
 "64c06f7cdb2e2f1a0c765522"  , 
 "64c06f7cdb2e2f1a0c765523"  , 
 "64c06f7cdb2e2f1a0c765524"   
]

mentor_ids = [
    "64c06f0cdb2e2f1a0c065512", "64c06f0cdb2e2f1a0c065513", "64c06f0cdb2e2f1a0c065514",
    "64c06f0cdb2e2f1a0c065515", "64c06f0cdb2e2f1a0c065516", "64c06f0cdb2e2f1a0c065517",
    "64c06f0cdb2e2f1a0c065518", "64c06f0cdb2e2f1a0c065519", "64c06f0cdb2e2f1a0c065510",
    "64c06f0cdb2e2f1a0c06551a", "64c06f0cdb2e2f1a0c06551b", "64c06f0cdb2e2f1a0c06551c",
    "64c06f0cdb2e2f1a0c06551d", "64c06f0cdb2e2f1a0c06551e", "64c06f0cdb2e2f1a0c06551f",
    "64c06f0cdb2e2f1a0c065520", "64c06f0cdb2e2f1a0c065521", "64c06f0cdb2e2f1a0c065522",
    "64c06f0cdb2e2f1a0c065523", "64c06f0cdb2e2f1a0c065524"
]

# ------------------------ Static/Random Data ------------------------
messages = [
    "I need help with my UPSC prep.",
    "Can you guide me with my career path?",
    "Need mentorship for NEET exam strategy.",
    "I'm looking for clarity on job opportunities.",
    "Need help with exam stress management."
]

times = ["10:00 AM", "2:00 PM", "5:30 PM", "7:00 PM", "9:15 PM"]

# ------------------------ Generate Fake Data ------------------------

requests_data = []

num_requests = len(request_ids)

for i in range(num_requests):
    mentee_id = random.choice(mentee_ids)
    mentor_id = random.choice(mentor_ids)

    # Random schedule within the next 60 days
    scheduled_date = datetime.utcnow() + timedelta(days=random.randint(1, 60))
    schedule = {
        "date": scheduled_date.day,
        "month": scheduled_date.month,
        "year": scheduled_date.year,
        "time": random.choice(times)
    }

    amount = random.choice([199, 299, 399, 499, 599])
    transaction_number = f"TXN{random.randint(100000, 999999)}"
    message = random.choice(messages)

    created_at = scheduled_date - timedelta(days=random.randint(1, 20))
    updated_at = created_at + timedelta(days=random.randint(0, 5))

    request_doc = {
        "_id": {"$oid": request_ids[i]},
        "menteeId": {"$oid": mentee_id},
        "mentorId": {"$oid": mentor_id},
        "amount": amount,
        "transactionNumber": transaction_number,
        "schedule": schedule,
        "messageSent": message,
        "createdAt": {"$date": created_at.isoformat(timespec='milliseconds') + "Z"},
        "updatedAt": {"$date": updated_at.isoformat(timespec='milliseconds') + "Z"},
    }

    requests_data.append(request_doc)

# ------------------------ Write to File ------------------------

with open("requests.json", "w") as file:
    json.dump(requests_data, file, indent=2)

print(f"{len(requests_data)} requests generated and saved to 'requests.json'")
