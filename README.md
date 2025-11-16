# Todo App

A full-stack todo app built with React (frontend), TypeScript, Node.js + Express (backend), and MongoDB. It has signup/login, password reset, dark mode, and a clean dashboard UI.

# Features

*** Signup, login, and password reset
*** Create, read, update, delete todos (CRUD)
*** Dark mode toggle
*** Responsive dashboard UI (works on phones and desktop)
*** Smooth animations
*** TypeScript for safer code
*** Protected routes (only logged-in users can access todos)
*** Form validation with Zod
*** API client that adds auth token automatically
*** React Query for server state and caching

# Project structure

todo_app/
├── backend/                 # Node.js + Express API
│   ├── src/
│   │   ├── config/         # DB config
│   │   ├── controllers/    # request handlers
│   │   ├── middleware/     # auth, error handling
│   │   ├── models/         # MongoDB schemas
│   │   ├── routes/         # API routes
│   │   ├── utils/          # helpers
│   │   ├── app.ts
│   │   └── server.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── .env
└── frontend/               # React + TypeScript UI
    ├── src/
    │   ├── api/           # API client
    │   ├── components/    # UI components
    │   ├── hooks/         # custom hooks
    │   ├── pages/         # pages
    │   ├── store/         # state
    │   ├── App.tsx
    │   └── main.tsx
    ├── package.json
    ├── tailwind.config.js
    └── tsconfig.json

# Prerequisites

Make sure you have:
Node.js (v18+ recommended)
MongoDB (local or MongoDB Atlas)
npm (or yarn)
Backend setup
Open a terminal and go to the backend folder:
cd backend


# Install packages:

npm install

# Create or update .env with your values:

MONGO_URI=mongodb://localhost:27017/todoapp
OR for MongoDB Atlas:
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/todoapp
JWT_SECRET=your_jwt_secret
PORT=5000


# Start the backend server:


The frontend runs at: http://localhost:5173

# API Endpoints

POST /api/auth/signup — register new user
POST /api/auth/login — login
Password reset
POST /api/reset/forgot — send reset token
POST /api/reset/reset — reset password with token
Todos (require login)
GET /api/todos — get all user todos
POST /api/todos — create a todo
PUT /api/todos/:id — update a todo
DELETE /api/todos/:id — delete a todo



# Tech stack 

Backend: Node.js, Express, TypeScript, MongoDB, Mongoose, JWT, bcryptjs
Frontend: React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, Zustand, React Query, React Hook Form, React Router, Axios

# How to use

Start backend and frontend (see commands above).
Open http://localhost:5173 in your browser.

Sign up for an account, then log in.
Add, edit, delete, or mark todos as done.
Try dark mode and password reset.
Security notes
Uses JWT for auth
Passwords hashed with bcryptjs
Protected API routes (need token)
Input validation and error handling enabled
CORS configured for API

# Development tips

If you see TypeScript errors in your editor, run npm install in both backend and frontend first.
The app stores theme and auth token in localStorage.
Dark mode uses Tailwind classes.
Environment variables (example)
Create a .env in the backend:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
