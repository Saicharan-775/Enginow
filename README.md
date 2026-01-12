#Student Task Manager

A simple and focused full-stack task management web application built to demonstrate end-to-end development skills including frontend UI, backend APIs, database integration, and deployment.

Project Overview

The Student Task Manager allows users to create, view, update, and manage daily tasks with priorities.
The application is designed to be minimal, fast, and easy to use, while showcasing clean code structure and proper separation of concerns.

This project was built as part of an assignment to demonstrate full-stack development skills using modern web technologies.

Features
Core Features

Add a new task with title and priority (Low / Medium / High)

View all tasks in a clean list layout

Mark tasks as completed or pending

Delete tasks

Filter tasks (All / Pending / Completed)

Sort tasks by creation time or priority

Responsive UI for desktop and mobile

Persistent storage using MongoDB

UI & UX

Clean white professional interface

Priority badges with clear color indicators

Fast interactions with minimal UI delay

Simple and readable layout

Tech Stack
Frontend

React (Vite)

Tailwind CSS

Axios

Lucide Icons

Backend

Node.js

Express.js

MongoDB (MongoDB Atlas)

Tools & Deployment

Git & GitHub for version control

Railway for backend deployment

Vercel for frontend deployment

Data Model
Task
{
  "_id": "ObjectId",
  "title": "String",
  "priority": "low | medium | high",
  "completed": "Boolean",
  "createdAt": "Date",
  "updatedAt": "Date"
}

API Endpoints

Base URL: /api

Method	Endpoint	Description
POST	/tasks	Create a new task
GET	/tasks	Get all tasks
PUT	/tasks/:id	Update task (toggle complete / edit)
DELETE	/tasks/:id	Delete task
Project Structure
Assignment/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── App.jsx
│   └── index.html
│
└── README.md

How to Run Locally
Backend
cd backend
npm install
npm start

Frontend
cd frontend
npm install
npm run dev


Make sure to add the backend API URL in the frontend environment variables.

Deployment

Frontend deployed on Vercel

Backend deployed on Railway

Environment variables are used to configure API URLs and database connection

Testing

API endpoints tested manually using Postman

Frontend forms include basic validation

UI tested for responsiveness on different screen sizes

Challenges Faced

Managing consistent state updates between frontend and backend

Handling UI refresh issues after edit and delete actions

Ensuring smooth user experience on free-tier hosting

These were resolved by simplifying state management and re-fetching data after critical operations.

Learnings

Improved understanding of React state management

Learned practical API integration with Axios

Gained experience deploying full-stack applications

Better understanding of UI performance and user experience

Conclusion

This project demonstrates a complete full-stack workflow from UI design to backend logic and deployment.
The focus was on correctness, simplicity, and clean user experience rather than unnecessary complexity.
