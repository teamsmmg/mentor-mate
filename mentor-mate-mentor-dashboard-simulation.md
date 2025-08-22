PLEASE REMEMBER THE FOLLOWING JSON DATA IS NOT PRESENT IN THE DATABASE IT IS JUST FOR THE INFORMATION HOW THE JSON FILE WILL LOOK FOR THE DEVELOPOMENT OF THE FRONTEND DASHBOARD FOR MENTORS ( REMEMBER NOT MENTEES)



### 1. **GET** `/mentor-data`  (Protected: `authMiddleware`)

**Response Example:**

```
{
  "success": true,
  "count": 2,
  "mentors": [
    {
      "_id": "64f12ab34c5d7d89a1234567",
      "userId": "64f12a934c5d7d89a1231234",
      "name": "Rohit Sharma",
      "profilePhoto": "https://example.com/profile1.jpg",
      "currentJob": {
        "post": "Software Engineer",
        "companyName": "Google"
      },
      "price": {
        "amount": 2000,
        "currency": "INR"
      },
      "rating": 4.5,
      "bio": "I am an experienced mentor in software development."
    },
    {
      "_id": "64f12ab34c5d7d89a9876543",
      "userId": "64f12a934c5d7d89a4321987",
      "name": "Anjali Verma",
      "profilePhoto": "https://example.com/profile2.jpg",
      "currentJob": {
        "post": "Data Scientist",
        "companyName": "Amazon"
      },
      "price": {
        "amount": 1500,
        "currency": "INR"
      },
      "rating": 4.7,
      "bio": "Helping students with ML, AI and Data Science."
    }
  ]
}
```

------

### 2. **POST** `/get-mentor-profile`

**Request Body Example:**

```
{
  "userId": "64f12ab34c5d7d89a1234567"
}
```

**Response Example:**

```
{
  "success": true,
  "mentor": {
    "_id": "64f12ab34c5d7d89a1234567",
    "userId": "64f12a934c5d7d89a1231234",
    "name": "Rohit Sharma",
    "profilePhoto": "https://example.com/profile1.jpg",
    "college": {
      "name": "IIT Bombay",
      "state": "Maharashtra",
      "city": "Mumbai"
    },
    "currentJob": {
      "post": "Software Engineer",
      "companyName": "Google",
      "state": "California",
      "city": "Mountain View"
    },
    "bio": "I guide students in coding interviews and system design.",
    "categories": ["Software Engineering", "System Design"],
    "rating": 4.5,
    "reviews": []
  }
}
```

------

### 3. **PATCH** `/update-mentor-profile`

**Request Body Example:**

```
{
  "mentorId": "64f12ab34c5d7d89a1234567",
  "bio": "Updated bio: Helping with DSA, System Design & Career Growth.",
  "experience": [
    {
      "post": "Senior Developer",
      "companyName": "Microsoft",
      "state": "Washington",
      "city": "Redmond"
    }
  ]
}
```

**Response Example:**

```
{
  "success": true,
  "message": "Profile updated successfully",
  "mentor": {
    "_id": "64f12ab34c5d7d89a1234567",
    "name": "Rohit Sharma",
    "bio": "Updated bio: Helping with DSA, System Design & Career Growth.",
    "experience": [
      {
        "post": "Senior Developer",
        "companyName": "Microsoft",
        "state": "Washington",
        "city": "Redmond"
      }
    ],
    "rating": 4.5
  }
}
```

------

### 4. **POST** `/get-mentee-request`

**Request Body Example:**

```
{
  "userId": "64f12ab34c5d7d89a1234567"
}
```

**Response Example:**

```
{
  "success": true,
  "requests": [
    {
      "_id": "64f45c1e2c7a7d45a1112223",
      "menteeId": "64f45c1e2c7a7d45a8887777",
      "mentorId": "64f12ab34c5d7d89a1234567",
      "amount": 1200,
      "transactionNumber": "TXN123456789",
      "schedule": {
        "date": 12,
        "month": 8,
        "year": 2025,
        "time": "6:00 PM"
      },
      "messageSent": "I want to schedule a mentorship session",
      "status": "pending",
      "createdAt": "2025-08-20T10:15:30.000Z"
    }
  ]
}
```

------

### 5. **PATCH** `/update-pending-request`

**Request Body Example:**

```
{
  "requestId": "64f45c1e2c7a7d45a1112223"
}
```

**Response Example:**

```
{
  "success": true,
  "message": "Request status updated successfully",
  "request": {
    "_id": "64f45c1e2c7a7d45a1112223",
    "menteeId": "64f45c1e2c7a7d45a8887777",
    "mentorId": "64f12ab34c5d7d89a1234567",
    "amount": 1200,
    "transactionNumber": "TXN123456789",
    "status": "accepted",
    "schedule": {
      "date": 12,
      "month": 8,
      "year": 2025,
      "time": "6:00 PM"
    },
    "messageSent": "I want to schedule a mentorship session",
    "updatedAt": "2025-08-22T14:22:00.000Z"
  }
}
```