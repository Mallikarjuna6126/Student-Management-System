# 🎓 Student Management System

A full-stack web application for managing student records, built with **Spring Boot**, **React**, and **MySQL**. This project demonstrates a complete CRUD (Create, Read, Update, Delete) implementation with a layered backend architecture and a responsive, modern frontend.

## 📌 Features

- ➕ Add new student records (name, email, department, phone)
- 📋 View all students in a clean, responsive table
- ✏️ Edit existing student details
- 🗑️ Delete student records
- ⚡ Real-time UI updates after every action (no page reloads)
- 🎨 Clean, professional UI built with Bootstrap

## 🛠️ Tech Stack

**Backend**
- Java 21
- Spring Boot 3.5
- Spring Data JPA (Hibernate)
- MySQL
- Maven
- Lombok

**Frontend**
- React (Vite)
- Axios
- Bootstrap 5

## 🏗️ Architecture

The backend follows a standard layered architecture:

```
Controller  →  Service  →  Repository  →  Database
(REST APIs)   (Business     (Spring Data    (MySQL)
               Logic)        JPA)
```

## 📂 Project Structure

```
student-management-system/
├── backend/          # Spring Boot REST API
│   └── studentmanagement/
│       └── src/main/java/com/malaya/studentmanagement/
│           ├── controller/   # REST endpoints
│           ├── service/      # Business logic
│           ├── repository/   # Database access (Spring Data JPA)
│           └── model/        # Entity classes
└── frontend/         # React application
    └── src/
        └── App.jsx   # Main UI component
```

## 🔌 API Endpoints

| Method | Endpoint              | Description              |
|--------|-----------------------|---------------------------|
| GET    | `/students`           | Get all students          |
| GET    | `/students/{id}`       | Get a student by ID       |
| POST   | `/students`            | Add a new student         |
| PUT    | `/students/{id}`       | Update a student          |
| DELETE | `/students/{id}`       | Delete a student           |

## 🚀 Getting Started

### Prerequisites
- Java 21 (JDK)
- Node.js
- MySQL

### Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd backend/studentmanagement
   ```
2. Create a MySQL database:
   ```sql
   CREATE DATABASE student_db;
   ```
3. Update `src/main/resources/application.properties` with your MySQL username and password.
4. Run the application (via your IDE, or):
   ```bash
   ./mvnw spring-boot:run
   ```
   The backend will start at `http://localhost:8080`

### Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will start at `http://localhost:5173`

## 📸 Screenshots

*(Add screenshots of your app here — the form and table views look great!)*

## 👤 Author

**Mallikarjuna Durga Sai**
- GitHub: [@Mallikarjuna6126](https://github.com/Mallikarjuna6126)
- LinkedIn: [rayana-mallikarjuna-durga-sai](https://www.linkedin.com/in/rayana-mallikarjuna-durga-sai-198929328/)

## 📝 License

This project is open source and available for learning purposes.
