# API Configuration/Documentation


### In the project as mentioned in Readme.md file we have in total 10 APIs which collectively make the project work.

## Let's look at all one by one

- `/user/login` (Get Request)<br>
Output
``` sha 
Welcome to the Login Page
```
-`/user/login` (Post Request)<br>
Input
```sha 
{
    "email": "sample@example.com",
    "password": "example"
}
```
Output
```sha 
{
    User Data and JWT token will be sent.
}

```
- `user/signup` (Get Request)<br>
Output
```sha
{"Welcome to Signup Page"}
```
- `user/signup` (Post Request)<br>
Input
```sha 
{
    "email":"smaple@example.com",
    "password": "sample",
    "first_name":"Rohit",
    "last_name":"Kumar"
}
```
Output
```sha
{
   " New user created"
}
```
- `/vote/newvote` (Post Request)
Input
```sha
{
    "pollId":"123234@2342",
    "userId":"234312",
    "selectedOption":"0"
}
```
Output
```sha
{
    "Vote registered successfully"
}
```

- `/poll/create` (POST Request)

**Input:**

```json
{
    "question": "What is your favorite programming language?",
    "options": [
        { "optionText": "JavaScript" },
        { "optionText": "Python" },
        { "optionText": "Java" }
    ],
    "userid": "user12345"
}
```

**Output:**

```json
{
    "message": "Poll created successfully",
    "pollId": "abc123xyz"
}
```

---

- `/poll/userpolls` (GET Request)

**Query Parameters:**

```
userid=user12345
```

**Output:**

```json
[
    {
        "_id": "abc123xyz",
        "question": "What is your favorite programming language?",
        "options": [
            { "optionText": "JavaScript", "votes": 5 },
            { "optionText": "Python", "votes": 3 },
            { "optionText": "Java", "votes": 2 }
        ],
        "createdBy": "user12345"
    }
]
```

---

-`/poll/allpolls` (GET Request)

**Output:**

```json
[
    {
        "_id": "abc123xyz",
        "question": "What is your favorite programming language?",
        "options": [
            { "optionText": "JavaScript", "votes": 5 },
            { "optionText": "Python", "votes": 3 },
            { "optionText": "Java", "votes": 2 }
        ],
        "createdBy": "user12345"
    },
    {
        "_id": "xyz456abc",
        "question": "What is the best frontend framework?",
        "options": [
            { "optionText": "React", "votes": 8 },
            { "optionText": "Vue", "votes": 4 },
            { "optionText": "Angular", "votes": 2 }
        ],
        "createdBy": "user67890"
    }
]
```


- `/reports/newreport` (POST Request)
**Description:**
Create a new report.

**Input:**
```json
{
    "title": "Issue with street lights",
    "description": "Several street lights are not working in the main road.",
    "userid": "12345abcd"
}
```

**Output:**
```json
"Report submitted"
```
OR
```json
"Some error occurred"
```

---

- `/reports/allreports` (GET Request)
**Description:**
Retrieve all reports submitted by users.

**Output:**
```json
[
    {
        "_id": "657ghfg56fdg65",
        "title": "Issue with street lights",
        "description": "Several street lights are not working in the main road.",
        "reportedby": "12345abcd"
    },
    {
        "_id": "678hgf67hgf676",
        "title": "Pothole on main road",
        "description": "Large pothole at the intersection causing traffic issues.",
        "reportedby": "67890xyz"
    }
]
```

---

- `/report/userreports` (GET Request)
**Description:**
Retrieve all reports submitted by a specific user.

**Input:** (Query Parameter)
```json
/userreports?userid=12345abcd
```

**Output:**
```json
[
    {
        "_id": "657ghfg56fdg65",
        "title": "Issue with street lights",
        "description": "Several street lights are not working in the main road.",
        "reportedby": "12345abcd"
    }
]
```



