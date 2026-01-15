# 🎨 Portfolio Management System

**Author**: Adolat Gharibshoeva  
**Cohort**: CS, Class of 2028  
**Courses**: Web and Internet Technologies & Object-Oriented Programming

> A full-stack, aesthetically pleasing, and responsive portfolio application built with **React**, **Spring Boot**, and modern design principles.

## 🌐 Live Demo

- **Frontend**: https://codesnap-lime.vercel.app/
- **Backend API**: https://portfolio-backend-u87w.onrender.com/ 
- **GitHub Repository**: https://github.com/RMLA04/codesnap

![Portfolio Demo](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop)

## ✨ Features

*   **Modern UI/UX**: Glassmorphism, premium gradients, and smooth animations using `framer-motion`.
*   **Theme System**: 🌓 Fully integrated Dark and Light mode.
*   **RESTful API**: Robust backend managing Create, Read, Update, and Delete operations.
*   **Responsive Design**: Flawless experience on Mobile, Tablet, and Desktop.
*   **Interactive**:
    *   Search and Filter projects.
    *   Form Validation (Client & Server).
    *   Live URL previews.

## 🛠️ Tech Stack

**Frontend**
*   **React** (Vite)
*   **Framer Motion** (Animations)
*   **Lucide React** (Icons)
*   **CSS3 Variables** (Theming)

**Backend**
*   **Java 17**
*   **Spring Boot 3** (Web, JPA, Validation)
*   **H2 Database** (In-Memory)

## 🧩 OOP Principles Demonstrated

This project showcases core Object-Oriented Programming concepts:

*   **Encapsulation**: Project entity with private fields and getters/setters
*   **Abstraction**: Service layer abstracts business logic from controllers
*   **Separation of Concerns**: Clear MVC architecture (Model-View-Controller)
*   **Dependency Injection**: Spring Boot's IoC container manages dependencies
*   **Exception Handling**: Custom exception classes for robust error management
*   **Data Transfer Objects (DTOs)**: Clean separation between entities and API responses

## 🚀 Quick Start

### Backend (Spring Boot)
1.  Navigate to `portfolio-backend`.
2.  Run the application:
    ```bash
    ./mvnw spring-boot:run
    ```
3.  Server starts at `http://localhost:8080`.

### Frontend (React)
1.  Navigate to `portfolio-frontend`.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start development server:
    ```bash
    npm run dev
    ```
4.  Open `http://localhost:5173`.

## ☁️ Deployment

This application is deployed using modern cloud platforms:

### Backend (Render)
*   **Platform**: [Render.com](https://render.com)
*   **Runtime**: Docker
*   **Root Directory**: `portfolio-backend`
*   **Database**: H2 in-memory (data resets on restart)

### Frontend (Vercel)
*   **Platform**: [Vercel.com](https://vercel.com)
*   **Framework**: Vite
*   **Environment Variable**: `VITE_API_URL` pointing to backend API

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

## 📚 Project Structure

```
codesnap/
├── portfolio-backend/       # Spring Boot REST API
│   ├── src/main/java/
│   │   └── com/portfolio/
│   │       ├── controller/  # REST endpoints
│   │       ├── service/     # Business logic
│   │       ├── entity/      # JPA entities
│   │       ├── dto/         # Data transfer objects
│   │       ├── repository/  # Data access layer
│   │       ├── exception/   # Custom exceptions
│   │       └── config/      # Configuration classes
│   └── Dockerfile
├── portfolio-frontend/      # React + Vite SPA
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── services/        # API integration
│   │   └── config/          # Environment config
│   └── vercel.json
└── README.md
```

## 📝 Academic Context

This project was developed as part of:
- **Web and Internet Technologies**: Demonstrates full-stack web development, RESTful APIs, HTTP protocols, and modern deployment practices
- **Object-Oriented Programming**: Implements OOP principles including encapsulation, abstraction, inheritance (exception hierarchy), and polymorphism

## 📄 License
MIT License - Feel free to use and modify!
