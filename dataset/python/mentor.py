import json
import random
from datetime import datetime, timedelta

# Provided IDs
mentor_ids = [
    "64c06f0cdb2e2f1a0c065512", "64c06f0cdb2e2f1a0c065513", "64c06f0cdb2e2f1a0c065514",
    "64c06f0cdb2e2f1a0c065515", "64c06f0cdb2e2f1a0c065516", "64c06f0cdb2e2f1a0c065517",
    "64c06f0cdb2e2f1a0c065518", "64c06f0cdb2e2f1a0c065519", "64c06f0cdb2e2f1a0c065510",
    "64c06f0cdb2e2f1a0c06551a", "64c06f0cdb2e2f1a0c06551b", "64c06f0cdb2e2f1a0c06551c",
    "64c06f0cdb2e2f1a0c06551d", "64c06f0cdb2e2f1a0c06551e", "64c06f0cdb2e2f1a0c06551f",
    "64c06f0cdb2e2f1a0c065520", "64c06f0cdb2e2f1a0c065521", "64c06f0cdb2e2f1a0c065522",
    "64c06f0cdb2e2f1a0c065523", "64c06f0cdb2e2f1a0c065524"
]


# Ensure unique _id for each mentor document
unique_mentor_ids = list(set(mentor_ids))

user_ids = [
    "64c96f7cdb2e2f1a9c76540b", "64c96f7cdb2e2f1a9c76540c", "64c96f7cdb2e2f1a9c76540d",
    "64c96f7cdb2e2f1a9c76540e", "64c96f7cdb2e2f1a9c76540f", "64c96f7cdb2e2f1a9c76541a",
    "64c96f7cdb2e2f1a9c76541b", "64c96f7cdb2e2f1a9c76541c", "64c96f7cdb2e2f1a9c76541d",
    "64c96f7cdb2e2f1a9c76541e", "64c96f7cdb2e2f1a9c76541f", "64c96f7cdb2e2f1a9c765421",
    "64c96f7cdb2e2f1a9c765422", "64c96f7cdb2e2f1a9c765423", "64c96f7cdb2e2f1a9c765424",
    "64c96f7cdb2e2f1a9c765425", "64c96f7cdb2e2f1a9c765426", "64c96f7cdb2e2f1a9c765427",
    "64c96f7cdb2e2f1a9c765428", "64c96f7cdb2e2f1a9c765429"
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
unique_review_ids = list(set(review_ids)) # Remove duplicates for actual use

# Helper function to generate random dates
def random_date(start, end):
    return start + timedelta(
        seconds=random.randint(0, int((end - start).total_seconds()))
    )

# Sample data for generation
names = ["Dr. Ananya Sharma", "Prof. Rohan Gupta", "Ms. Priya Singh", "Mr. Vivek Kumar",
         "Dr. Neha Jain", "Prof. Alok Mishra", "Ms. Shruti Das", "Mr. Arjun Reddy",
         "Dr. Kavita Rao", "Prof. Suresh Menon"]
colleges = [
    {"name": "IIT Delhi", "state": "Delhi", "city": "New Delhi"},
    {"name": "BITS Pilani", "state": "Rajasthan", "city": "Pilani"},
    {"name": "VIT Vellore", "state": "Tamil Nadu", "city": "Vellore"},
    {"name": "NIT Warangal", "state": "Telangana", "city": "Warangal"},
    {"name": "SRM Chennai", "state": "Tamil Nadu", "city": "Chennai"},
    {"name": "Manipal Institute of Technology", "state": "Karnataka", "city": "Manipal"},
    {"name": "Delhi University", "state": "Delhi", "city": "New Delhi"},
    {"name": "Mumbai University", "state": "Maharashtra", "city": "Mumbai"},
    {"name": "Anna University", "state": "Tamil Nadu", "city": "Chennai"},
]
companies = ["Google India", "Microsoft India", "Amazon India", "Meta India", "Apple India",
             "Tata Consultancy Services", "Infosys", "Wipro", "HCLTech", "Cognizant"]
posts = ["Software Engineer", "Data Scientist", "Product Manager", "UX Designer", "DevOps Engineer",
         "Management Consultant", "Financial Analyst", "Solution Architect", "Team Lead", "Senior Developer"]
categories = ["JEE", "NEET", "UPSC", "CAT", "GMAT", "GRE", "SAT", "CLAT", "NDA", "GATE"]
exam_names = ["JEE Advanced", "NEET UG", "UPSC CSE", "CAT", "GMAT", "GRE General", "SAT", "CLAT", "NDA", "GATE"]
states = ["Delhi", "Maharashtra", "Karnataka", "Tamil Nadu", "Uttar Pradesh", "Rajasthan",
          "Telangana", "West Bengal", "Gujarat", "Madhya Pradesh"]
cities = ["New Delhi", "Mumbai", "Bengaluru", "Chennai", "Lucknow", "Jaipur",
          "Hyderabad", "Kolkata", "Ahmedabad", "Bhopal"]

mentors_data = []
num_mentors_to_generate = len(unique_mentor_ids) # Generate as many as unique IDs available

for i in range(num_mentors_to_generate):
    mentor_id = unique_mentor_ids[i]
    user_id = user_ids[i % len(user_ids)] # Cycle through user IDs if fewer than mentors

    num_contacted_clients = random.randint(0, min(5, len(request_ids)))
    contacted_clients = random.sample(request_ids, num_contacted_clients)

    num_reviews = random.randint(0, min(3, len(unique_review_ids)))
    reviews = random.sample(unique_review_ids, num_reviews)

    num_exams = random.randint(1, 3)
    exams = []
    for _ in range(num_exams):
        exam_name = random.choice(exam_names)
        exams.append({
            "name": exam_name,
            "image": f"/images/exam_{exam_name.lower().replace(' ', '-')}.png",
            "rank": f"AIR {random.randint(1, 1000)}"
        })

    num_experience = random.randint(1, 3)
    experience = []
    for _ in range(num_experience):
        exp_company = random.choice(companies)
        exp_post = random.choice(posts)
        exp_state = random.choice(states)
        exp_city = random.choice(cities)
        experience.append({
            "post": exp_post,
            "companyName": exp_company,
            "state": exp_state,
            "city": exp_city
        })

    mentor_college = random.choice(colleges)
    mentor_current_job = {
        "post": random.choice(posts),
        "companyName": random.choice(companies),
        "state": random.choice(states),
        "city": random.choice(cities)
    }

    mentor_categories = random.sample(categories, random.randint(1, 3))

    mentor_rating = round(random.uniform(3.0, 5.0), 1)
    past_ratings = [round(random.uniform(3.0, 5.0), 1) for _ in range(random.randint(5, 20))]

    num_photos = random.randint(1, 3)
    photos = [f"/images/mentor_photo_{random.randint(1, 10)}.jpg" for _ in range(num_photos)]

    # Dates
    now = datetime.utcnow()
    created_at = random_date(now - timedelta(days=730), now - timedelta(days=180)) # 2 years to 6 months ago
    updated_at = random_date(created_at, now)
    last_login = random_date(updated_at - timedelta(days=30), now) # Last login within last month

    mentor = {
        "_id": {"$oid": mentor_id},
        "userId": {"$oid": user_id},
        "profilePhoto": f"/placeholder.svg?height=100&width=100",
        "name": names[i % len(names)],
        "contactedClients": [{"$oid": client_id} for client_id in contacted_clients],
        "exams": exams,
        "categories": mentor_categories,
        "college": mentor_college,
        "currentJob": mentor_current_job,
        "experience": experience,
        "bio": f"Experienced mentor specializing in {random.choice(mentor_categories)} with a passion for guiding students. I have helped many achieve their goals in {random.choice(exam_names)} and navigate career paths. My approach is practical and results-oriented.",
        "pricing": {
            "amount": random.randint(500, 2000),
            "currency": "INR"
        },
        "rating": mentor_rating,
        "pastRating": past_ratings,
        "reviews": [{"$oid": review_id} for review_id in reviews],
        "videoLink": f"https://www.youtube.com/embed/mentor_intro_video_{i+1}",
        "photos": [f"/placeholder.svg?height=400&width=600" for j in range(num_photos)],
        "lastLogin": {"$date": last_login.isoformat(timespec='milliseconds') + "Z"},
        "createdAt": {"$date": created_at.isoformat(timespec='milliseconds') + "Z"},
        "updatedAt": {"$date": updated_at.isoformat(timespec='milliseconds') + "Z"}
    }
    mentors_data.append(mentor)

# Output the JSON data
with open("mentee.json", "w") as file:
    json.dump(mentors_data, file, indent=2)

