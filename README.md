# Todo App



- Signup, login, and password reset  

Below are screenshots of the app — place the image files under `frontend/public/screenshots/` (or `docs/screenshots/`) and they will render here.

### Signup (dark mode)

![Signup screen](frontend/public/screenshots/signup.png)

### Dashboard (todos)

![Dashboard screen](frontend/public/screenshots/dashboard.png)

If you want, I can add the actual image files into the repository for you; tell me if you'd like me to save them to `frontend/public/screenshots/`.
- Add, edit, delete, and view todos  
- Dark mode toggle  
- Works on all screen sizes  

# Project structure

todo_app/
├── backend/
│ ├── src/
│ │ ├── config/
│ │ ├── controllers/
│ │ ├── middleware/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── utils/
│ │ ├── app.ts
│ │ └── server.ts
│ ├── package.json
│ ├── tsconfig.json
│ └── .env
└── frontend/
├── src/
│ ├── api/
│ ├── components/
│ ├── hooks/
│ ├── pages/
│ ├── store/
│ ├── App.tsx
│ └── main.tsx
├── package.json
├── tailwind.config.js
└── tsconfig.json


# Install packages:

npm install

# Create or update .env with your values:
MONGO_URI=mongodb://localhost:27017/todoapp
# For MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/todoapp
JWT_SECRET=your_jwt_secret
PORT=5000


# Start the backend server:
The frontend runs at: http://localhost:5173

# API Endpoints

- POST /api/auth/signup — register new user
- POST /api/auth/login — login
- Password reset
- POST /api/reset/forgot — send reset token
- POST /api/reset/reset — reset password with token
- Todos (require login)
- GET /api/todos — get all user todos
- POST /api/todos — create a todo
- PUT /api/todos/:id — update a todo
- DELETE /api/todos/:id — delete a todo



# Tech stack 

- Backend: Node.js, Express, TypeScript, MongoDB, Mongoose, JWT, bcryptjs
- Frontend: React 18, TypeScript, Vite, Tailwind CSS, Framer Motion,   Zustand, React Query, React Hook Form, React Router, Axios

# How to use

- Start backend and frontend (see commands above).
- Open http://localhost:5173 in your browser.

- Sign up for an account, then log in.
- Add, edit, delete, or mark todos as done.
- Try dark mode and password reset.
- Security notes
- Uses JWT for auth
- Passwords hashed with bcryptjs
- Protected API routes (need token)
- Input validation and error handling enabled
- CORS configured for API

# Development tips

- If you see TypeScript errors in your editor, run npm install in both backend and frontend first.
- The app stores theme and auth token in localStorage.
- Dark mode uses Tailwind classes.
- Environment variables (example)
- Create a .env in the backend:
- MONGO_URI=your_mongodb_connection_string
- JWT_SECRET=your_jwt_secret_key
- PORT=5000
