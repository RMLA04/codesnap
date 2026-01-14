# 🎨 Portfolio Management System

> A full-stack, aesthetically pleasing, and responsive portfolio application built with **React**, **Spring Boot**, and modern design principles.

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

### Backend (Render)
*   **Runtime**: Docker
*   **Root Directory**: `portfolio-backend`
*   **Env Vars**: None required for H2.

### Frontend (Vercel)
*   **Framework**: Vite
*   **Env Variable**: `VITE_API_URL` = `YOUR_BACKEND_URL/api`

## 📝 License
MIT License - Fee free to use and modify!
