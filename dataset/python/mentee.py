import json
import random
from datetime import datetime, timedelta

# Placeholders – You will fill in these lists
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

user_ids = [
       "64c96f7cdb2e2f1a9c765400"   ,
   "64c96f7cdb2e2f1a9c765401"   ,
   "64c96f7cdb2e2f1a9c765402"   ,
   "64c96f7cdb2e2f1a9c765403"   ,
   "64c96f7cdb2e2f1a9c765404"   ,
   "64c96f7cdb2e2f1a9c765405"   ,
   "64c96f7cdb2e2f1a9c765406"   ,
   "64c96f7cdb2e2f1a9c765407"   ,
   "64c96f7cdb2e2f1a9c765408"   ,
   "64c96f7cdb2e2f1a9c765409"   ,
   "64c96f7cdb2e2f1a9c76540a"   ,
   "64c96f7cdb2e2f1a9c75640b"   ,
   "64c96f7cdb2e2f1a9c75640c"   ,
   "64c96f7cdb2e2f1a9c75640e"   ,
   "64c96f7cdb2e2f1a9c75640f"   ,
   "64c96f7cdb2e2f1a9c756411"   ,
   "64c96f7cdb2e2f1a9c756412"   ,
   "64c96f7cdb2e2f1a9c756413"   ,
   "64c96f7cdb2e2f1a9c756414"   ,
   "64c96f7cdb2e2f1a9c756415" 
]

mentor_ids = [
    "64c06f0cdb2e2f1a0c065512"   ,
  "64c06f0cdb2e2f1a0c065513"   ,
  "64c06f0cdb2e2f1a0c065514"   ,
  "64c06f0cdb2e2f1a0c065515"   ,
  "64c06f0cdb2e2f1a0c065516"   ,
  "64c06f0cdb2e2f1a0c065517"   ,
  "64c06f0cdb2e2f1a0c065518"   ,
  "64c06f0cdb2e2f1a0c065519"   ,
  "64c06f0cdb2e2f1a0c065510"   ,
  "64c06f0cdb2e2f1a0c06551a"   ,
  "64c06f0cdb2e2f1a0c06551b"   ,
  "64c06f0cdb2e2f1a0c06551c"   ,
  "64c06f0cdb2e2f1a0c06551d"   ,
  "64c06f0cdb2e2f1a0c06551e"   ,
  "64c06f0cdb2e2f1a0c06551f"   ,
  "64c06f0cdb2e2f1a0c065520"   ,
  "64c06f0cdb2e2f1a0c065521"   ,
  "64c06f0cdb2e2f1a0c065522"   ,
  "64c06f0cdb2e2f1a0c065523"   ,
  "64c06f0cdb2e2f1a0c065524"   
]

request_ids = [
    "64c96f7cdb2e2f1a9c766410", "64c96f7cdb2e2f1a9c766411", "64c96f7cdb2e2f1a9c766412",
    "64c96f7cdb2e2f1a9c766413", "64c96f7cdb2e2f1a9c766414", "64c96f7cdb2e2f1a9c766415",
    "64c96f7cdb2e2f1a9c766416", "64c96f7cdb2e2f1a9c766417", "64c96f7cdb2e2f1a9c766418",
    "64c96f7cdb2e2f1a9c766419", "64c96f7cdb2e2f1a9c76641a", "64c96f7cdb2e2f1a9c76641b",
    "64c96f7cdb2e2f1a9c76641c", "64c96f7cdb2e2f1a9c76641d", "64c96f7cdb2e2f1a9c76641e",
    "64c96f7cdb2e2f1a9c76641f", "64c96f7cdb2e2f1a9c766420", "64c96f7cdb2e2f1a9c766421",
    "64c96f7cdb2e2f1a9c766422", "64c96f7cdb2e2f1a9c766423"
]

review_ids = [
    "64c96f7cdb2e2f1a9c776420", "64c96f7cdb2e2f1a9c776421", "64c96f7cdb2e2f1a9c776422",
    "64c96f7cdb2e2f1a9c776423", "64c96f7cdb2e2f1a9c776424", "64c96f7cdb2e2f1a9c776425",
    "64c96f7cdb2e2f1a9c776426", "64c96f7cdb2e2f1a9c776427", "64c96f7cdb2e2f1a9c776428",
    "64c96f7cdb2e2f1a9c776429", "64c96f7cdb2e2f1a9c77642b", "64c96f7cdb2e2f1a9c77642c",
    "64c96f7cdb2e2f1a9c77642a", "64c96f7cdb2e2f1a9c77642d", "64c96f7cdb2e2f1a9c77642e",
    "64c96f7cdb2e2f1a9c77642f", "64c96f7cdb2e2f1a9c776431", "64c96f7cdb2e2f1a9c776432",
    "64c96f7cdb2e2f1a9c776433"
]

complaint_ids = [
        "64c96f8cdb2e2f1a9c865512"   ,
    "64c96f8cdb2e2f1a9c865513"   ,
    "64c96f8cdb2e2f1a9c865514"   ,
    "64c96f8cdb2e2f1a9c865515"   ,
    "64c96f8cdb2e2f1a9c865516"   ,
    "64c96f8cdb2e2f1a9c865518"   ,
    "64c96f8cdb2e2f1a9c865518"   ,
    "64c96f8cdb2e2f1a9c865519"   ,
    "64c96f8cdb2e2f1a9c865510"   ,
    "64c96f8cdb2e2f1a9c86551a"   ,
    "64c96f8cdb2e2f1a9c86551b"   ,
    "64c96f8cdb2e2f1a9c86551c"   ,
    "64c96f8cdb2e2f1a9c86551d"   ,
    "64c96f8cdb2e2f1a9c86551e"   ,
    "64c96f8cdb2e2f1a9c86551f"   ,
    "64c96f8cdb2e2f1a9c865521"   ,
    "64c96f8cdb2e2f1a9c865522"   ,
    "64c96f8cdb2e2f1a9c865523"   ,
    "64c96f8cdb2e2f1a9c865524"   ,
    "64c96f8cdb2e2f1a9c865525"   
]

# Sample static values
names = ["Aarav", "Diya", "Vivaan", "Anika", "Krishna", "Meera", "Ritvik", "Saanvi", "Aditya", "Ishita"]
genders = ["male", "female", "other"]
working_status = ["student", "professional", "employee"]

# Helper for random date
def random_date(start, end):
    return start + timedelta(seconds=random.randint(0, int((end - start).total_seconds())))

mentees_data = []
num_mentees_to_generate = len(mentee_ids)

for i in range(num_mentees_to_generate):
    mentee_id = mentee_ids[i]
    user_id = user_ids[i % len(user_ids)]  # Cycle if not enough user IDs

    num_contacted = random.randint(0, 5)
    contacted_mentors = random.sample(request_ids, num_contacted)

    num_viewed = random.randint(0, 4)
    viewed_mentors = random.sample(mentor_ids, num_viewed)

    num_rejected = random.randint(0, 3)
    rejected_requests = random.sample(request_ids, num_rejected)

    num_reviews = random.randint(0, 2)
    rated_reviews = random.sample(review_ids, num_reviews)

    num_complaints = random.randint(0, 2)
    complaints = random.sample(complaint_ids, num_complaints) if complaint_ids else []

    num_search_terms = random.randint(1, 4)
    search_terms = random.sample(["JEE", "UPSC prep", "career guidance", "NEET", "MBA", "GRE"], num_search_terms)

    num_paybacks = random.randint(0, 3)
    total_paybacks = []
    for _ in range(num_paybacks):
        total_paybacks.append({
            "transactionId": f"txn_{random.randint(100000, 999999)}",
            "requestId": {"$oid": random.choice(request_ids)}
        })

    current_mentor = {"$oid": random.choice(mentor_ids)} if mentor_ids else None

    now = datetime.utcnow()
    created_at = random_date(now - timedelta(days=365), now - timedelta(days=180))
    updated_at = random_date(created_at, now)
    last_login = random_date(updated_at - timedelta(days=30), now)

    mentee = {
        "_id": {"$oid": mentee_id},
        "userId": {"$oid": user_id},
        "name": random.choice(names),
        "age": random.randint(16, 30),
        "profilePhoto": "/placeholder.svg?height=100&width=100",
        "gender": random.choice(genders),
        "working": random.choice(working_status),
        "contactedMentors": [{"$oid": _id} for _id in contacted_mentors],
        "currentMentor": current_mentor,
        "searchHistory": search_terms,
        "viewedMentors": [{"$oid": _id} for _id in viewed_mentors],
        "rejectedRequests": [{"$oid": _id} for _id in rejected_requests],
        "totalPaybacks": total_paybacks,
        "complaints": [{"$oid": _id} for _id in complaints],
        "ratedReviews": [{"$oid": _id} for _id in rated_reviews],
        "lastLogin": {"$date": last_login.isoformat(timespec='milliseconds') + "Z"},
        "createdAt": {"$date": created_at.isoformat(timespec='milliseconds') + "Z"},
        "updatedAt": {"$date": updated_at.isoformat(timespec='milliseconds') + "Z"},
    }

    mentees_data.append(mentee)

# Output to JSON file
with open("mentee.json", "w") as file:
    json.dump(mentees_data, file, indent=2)
