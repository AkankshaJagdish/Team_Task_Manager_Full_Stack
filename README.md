# Team Task Manager (Full-Stack)

A full-stack web application that enables teams to manage projects, assign tasks, and track progress with role-based access control (Admin/Member).

This project is built as part of an online assessment and demonstrates backend architecture, authentication, RBAC enforcement, and a functional frontend dashboard.

---

## 🚀 Features

### Authentication

* User signup and login
* Password hashing using bcrypt
* JWT-based authentication

### Role-Based Access Control (RBAC)

* Admins can create projects
* Only project members can access project data
* Only assigned users can update task status

### Project Management

* Create projects (Admin only)
* Add members to projects
* View only relevant projects

### Task Management

* Create and assign tasks
* Update task status (todo, in-progress, done)
* Tasks linked to projects and users

### Dashboard

* View all accessible tasks
* Filter tasks ("All" / "My Tasks")
* Overdue task detection and highlighting

---

## 🧱 Tech Stack

**Frontend**

* React (Vite)
* Axios
* React Router

**Backend**

* Node.js
* Express.js
* MongoDB (Mongoose)

**Authentication**

* JSON Web Tokens (JWT)

**Deployment**

* Backend: Railway
* Frontend: Railway / Vercel

---

## 📁 Project Structure

```
team-task-manager/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── controllers/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── api.js
│   │   └── App.jsx
│   └── index.html
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```
git clone <your-repo-url>
cd team-task-manager
```

---

### 2. Backend Setup

```
cd backend
npm install
```

Create a `.env` file:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:

```
npm start
```

---

### 3. Frontend Setup

```
cd frontend
npm install
npm run dev
```

Update API base URL in `src/api.js`:

```
baseURL: "https://your-backend-url/api"
```

---

## 🌐 Deployment

### Backend (Railway)

* Deploy backend repository on Railway
* Add environment variables:

  * `MONGO_URI`
  * `JWT_SECRET`

### Frontend (Railway / Vercel)

* Deploy frontend separately
* Set API base URL to deployed backend

---

## 🔗 Live Demo

* Live URL: (add your deployed link)
* Backend URL: (add Railway URL)

---

## 🎥 Demo Video

(2–5 minute walkthrough showing:)

* Signup / Login
* Project creation (Admin)
* Task assignment
* Status update
* Dashboard with overdue tasks

---

## 📌 API Overview

### Auth

* `POST /api/auth/signup`
* `POST /api/auth/login`

### Projects

* `POST /api/projects` (Admin only)
* `GET /api/projects`

### Tasks

* `POST /api/tasks`
* `GET /api/tasks`
* `PUT /api/tasks/:id`

---

## ✅ Requirements Coverage

* ✔ Authentication (JWT-based)
* ✔ Project & team management
* ✔ Task assignment and tracking
* ✔ Dashboard with overdue logic
* ✔ REST API + MongoDB
* ✔ Role-based access control
* ✔ Deployment on Railway

---

## 📎 Notes

This project focuses on correctness of backend logic, RBAC enforcement, and functional completeness rather than UI complexity. The system is designed to reflect real-world multi-user constraints.

---

## 👤 Author

Akanksha Jagdish

---
