# Civic Portal

## Overview
This project is a web-based solution for Smart Governance and Civic Engagement. It enables citizens to report issues and participate in polls. The projects also let users to create new Polls to get others opinion.
The Project is divided in  **2 Parts** as listed below:

- **Frontend** :This is part is build using React.js and TailwindCSS.
- **Backend**  :The project is build on Node.js using express.js.

The storage of the project is Powered by MongoDB Database Service.

Using all these technologies make this project a complete MERN Stack project.

## Features
- **User Authentication**: Secure login and registration. The passwords of the users are hashed using **sha256** algorithm which ensures its security.
- **Issue Reporting**: Citizens can submit and track reports.
- **Discussions & Polls**: Engage with others by voting for the Polls or/and getting others opinion for your Questions.
- **Proctected Routes**: All routes are protected which ensures that if someone tries to access any route which requires login than the person must login before accessing.

---

## Tech Stack
### Frontend Libraries and Framkworks
- **React**: Framework
- **Context API**: For making the login info available across the whole website. 
- **React Router Dom**: For Routing in the Website.
- **React Dom**: For Routing in the Website.
- **Cors**: Make the portal cross platform ready.
- **TailwindCSS**: To apply CSS in the website.
- **Axios**: To make request on backend to fetch the data as and when required.
- **Antd**: To make the UI more visually appeling.
- **Gsap**: To animate the website.

### Backend Libraries 
- **Node.js**
- **Express.js**
- **MongoDB**: Used for storing the user info and other data.
- **Mongoose**: Used for creating Models for different Schema's (User, Polls, Votes, Reoprts).
- **Dotenv**: Used to configurate the environment variables.
- **Json Web Tokens**: used to hide user info before forwarding to frontend for security.
- **Cors**:To make sure cross platform compatibility.

---

## Project Structure

### Frontend (`/frontend`)
```
frontend/
├── Public/             # Static assets (logos, icons)
├── Readme.md/          # Project Documentation
├── package.json/       # Dependencies
├── src/       



src/
├── components/         # Reusable UI components
├── pages/              # React pages (React Router)
├── Api/                # Context API for global state     
├── package.json        # Dependencies
├── App.jsx             # App.jsx file
├── main.jsx            # main.jsx file
```

### Backend (`/backend`)
```
src/
├── models/            # Mongoose schemas
├── routes/            # API routes
├── controllers/       # Route logics
├── middlewares/       # Authentication, validation, etc.
├── services/          # Helping functions
├── index.js           # Server entry point
├── package.json       # Dependencies
├── .env               # Environment variables
├── README.md          # Project documentation
```

---

# Installation & Setup
**Making a common folder for Backend and Frontend is prefered**
## Backend ⬇️
### Prerequisites
- Node.js & npm
- MongoDB

### Steps
#### 1. Clone the Repository
```sh
git clone https://github.com/r120dhiman/DebugitBackend.git
cd DebugitBackend
```

#### 2. Setup Backend
```sh
npm install
```
### 3. Setup .env File
- Create a .env file inside the DebugitBackend folder and Provide the following data:
```sh
MONGOURL_URL2="Database URL"
KEY="Setup your secret key here"
```
#### 4. Start the Backend
```sh
npm start
```
## Frontend Setup ⬇️

### Steps
#### 1. Clone the Repository
```sh
git clone https://github.com/r120dhiman/DebugitFrontend.git
cd DebugitFrontend
```

#### 2. Setup Frontend
```sh
npm install
```
### 3. Setup .env File
- Create a .env file inside the DebugitFrontend folder and Provide the following data:
```sh
REACT_APP_API_KEY="http://localhost:3001/"
```
#### 4. Start the Frontend
```sh
npm run dev
```

---

## API Endpoints
| Endpoint        | Method | Description |
|---------------|--------|-------------|
| `/user/login`  | GET   | Gives a welcome msg (can be used for testing) |
| `/user/login`  | POST   | Authenticate user |
| `/user/signup` | POST    | Register new user |
| `/vote/newvote` | POST    | Register new vote on the Poll |
| `/reports/allreports` | GET    | Fetch all reports |
| `/reports/userreports` | GET    | Fetch user created reoprts |
| `/reports/newreport` | POST    | Register new Report |
| `/poll/create` | POST    | Register new Report |
| `/poll/allpolls` | GET    | Fetch all the polls|
| `/poll/userpolls` | GET    | Fetch user created polls |

 For detailed information of API endpoints check 
' **apiconfig.md**' file
---


## Contributing
Feel free to submit issues and pull requests. Contributions are welcome!

## Author 
**Rohit Kumar** <br>
 Indian Institute of Technology BHU, Varanasi, India
 ---

