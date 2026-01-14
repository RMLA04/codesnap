# Portfolio Management System

A full-stack web application for managing portfolio projects, demonstrating REST APIs, OOP principles, design patterns, Spring Boot, JPA, and React.

## 📋 Project Description

This Portfolio Management System allows users to create, view, update, and delete portfolio projects through an intuitive web interface. The application follows industry-standard software engineering practices including:

- **Object-Oriented Programming (OOP)** principles
- **Design Patterns** (MVC, Repository, Service Layer, DTO)
- **Layered Architecture** (Controller → Service → Repository)
- **RESTful API** design
- **Responsive UI** with modern design

## ✨ Features

### Backend Features
- Complete CRUD operations for portfolio projects
- RESTful API with proper HTTP status codes
- Input validation and error handling
- H2 in-memory database for development
- JPA/Hibernate for database operations
- CORS configuration for frontend integration

### Frontend Features
- **Project List Page**: View all projects with search and pagination
- **Project Details Page**: View full project information
- **Create Project**: Add new projects with form validation
- **Edit Project**: Update existing projects
- **Delete Project**: Remove projects with confirmation
- **Search & Filter**: Search projects by title or tech stack
- **Pagination**: Navigate through projects efficiently
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Loading & Error States**: User-friendly feedback

## 🛠️ Tech Stack

### Backend
- **Java 17**
- **Spring Boot 3.2.0**
- **Spring Web** (REST API)
- **Spring Data JPA** (Hibernate)
- **H2 Database** (in-memory)
- **Maven** (build tool)
- **Lombok** (reduce boilerplate)

### Frontend
- **React 19** (functional components with hooks)
- **React Router DOM** (client-side routing)
- **Axios** (HTTP client)
- **Vite** (build tool)
- **Modern CSS** (Flexbox, Grid, CSS variables)

## 🏗️ Architecture & Design Patterns

### Backend Architecture

The backend follows a **layered architecture** with clear separation of concerns:

```
┌─────────────────────────────────────┐
│     Controller Layer (REST API)     │  ← Handles HTTP requests/responses
├─────────────────────────────────────┤
│      Service Layer (Business)       │  ← Contains business logic
├─────────────────────────────────────┤
│   Repository Layer (Data Access)    │  ← Database operations
├─────────────────────────────────────┤
│         Database (H2/JPA)           │  ← Data persistence
└─────────────────────────────────────┘
```

### Design Patterns Implemented

1. **MVC Pattern**: Separation of Model (Entity), View (Frontend), and Controller
2. **Repository Pattern**: Abstracts data access logic
3. **Service Layer Pattern**: Encapsulates business logic
4. **DTO Pattern**: Separates API contracts from internal entities
5. **Dependency Injection**: Constructor-based injection for loose coupling

### OOP Principles

- **Encapsulation**: Private fields with getters/setters
- **Abstraction**: Interfaces for repositories
- **Single Responsibility**: Each class has one clear purpose
- **Separation of Concerns**: Clear boundaries between layers

## 📡 API Endpoints

### Base URL: `http://localhost:8080/api`

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| GET | `/projects` | Get all projects | - | Array of projects |
| GET | `/projects/{id}` | Get project by ID | - | Project object |
| POST | `/projects` | Create new project | ProjectDTO | Created project |
| PUT | `/projects/{id}` | Update project | ProjectDTO | Updated project |
| DELETE | `/projects/{id}` | Delete project | - | 204 No Content |

### ProjectDTO Structure

```json
{
  "id": 1,
  "title": "Portfolio Management System",
  "description": "A full-stack application for managing projects",
  "techStack": "React, Spring Boot, H2",
  "githubUrl": "https://github.com/username/repo",
  "liveDemoUrl": "https://demo.example.com"
}
```

### HTTP Status Codes

- `200 OK`: Successful GET/PUT request
- `201 Created`: Successful POST request
- `204 No Content`: Successful DELETE request
- `400 Bad Request`: Validation errors
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server error

## 🚀 Getting Started

### Prerequisites

- **Java 17** or higher
- **Maven 3.6+**
- **Node.js 16+** and npm
- Git (for version control)

### Backend Setup

1. **Navigate to backend directory**:
   ```bash
   cd portfolio-backend
   ```

2. **Run the Spring Boot application**:
   ```bash
   mvn spring-boot:run
   ```

3. **Verify backend is running**:
   - API Base URL: http://localhost:8080/api
   - H2 Console: http://localhost:8080/h2-console
     - JDBC URL: `jdbc:h2:mem:portfoliodb`
     - Username: `sa`
     - Password: (leave empty)

### Frontend Setup

1. **Navigate to frontend directory**:
   ```bash
   cd portfolio-frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   - Frontend URL: http://localhost:5173

## 📁 Project Structure

```
portfolio-management-system/
├── portfolio-backend/              # Spring Boot backend
│   ├── src/main/java/com/portfolio/
│   │   ├── PortfolioApplication.java    # Main application class
│   │   ├── config/
│   │   │   └── CorsConfig.java          # CORS configuration
│   │   ├── controller/
│   │   │   └── ProjectController.java   # REST controller
│   │   ├── dto/
│   │   │   └── ProjectDTO.java          # Data Transfer Object
│   │   ├── entity/
│   │   │   └── Project.java             # JPA entity
│   │   ├── exception/
│   │   │   ├── ResourceNotFoundException.java
│   │   │   ├── ErrorResponse.java
│   │   │   └── GlobalExceptionHandler.java
│   │   ├── repository/
│   │   │   └── ProjectRepository.java   # JPA repository
│   │   └── service/
│   │       └── ProjectService.java      # Business logic
│   ├── src/main/resources/
│   │   └── application.properties       # Configuration
│   └── pom.xml                          # Maven dependencies
│
└── portfolio-frontend/             # React frontend
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx              # Navigation bar
    │   │   ├── ProjectCard.jsx         # Project card component
    │   │   ├── LoadingSpinner.jsx      # Loading indicator
    │   │   └── ErrorMessage.jsx        # Error display
    │   ├── pages/
    │   │   ├── ProjectList.jsx         # List all projects
    │   │   ├── ProjectDetails.jsx      # Project details
    │   │   ├── CreateProject.jsx       # Create form
    │   │   └── EditProject.jsx         # Edit form
    │   ├── services/
    │   │   └── projectService.js       # API service layer
    │   ├── config/
    │   │   └── config.js               # API configuration
    │   ├── App.jsx                     # Main app component
    │   └── index.css                   # Global styles
    └── package.json                    # npm dependencies
```

## 🎯 Demo Walkthrough (7-10 minutes)

### 1. Start the Application (2 minutes)
- Start backend: `cd portfolio-backend && mvn spring-boot:run`
- Start frontend: `cd portfolio-frontend && npm run dev`
- Open http://localhost:5173

### 2. Create Projects (2 minutes)
- Click "Add Project" in navigation
- Fill in project details:
  - Title: "E-commerce Platform"
  - Description: "Full-stack online shopping application"
  - Tech Stack: "React, Node.js, MongoDB"
  - GitHub URL: https://github.com/example/ecommerce
  - Live Demo URL: https://ecommerce-demo.com
- Click "Create Project"
- Create 2-3 more projects

### 3. View & Search (2 minutes)
- View project list with cards
- Use search bar to filter by title or tech stack
- Test pagination if you have 6+ projects

### 4. View Details (1 minute)
- Click "View Details" on any project
- Show full project information
- Click external links (GitHub, Live Demo)

### 5. Edit Project (1 minute)
- Click "Edit" button
- Modify project details
- Click "Update Project"
- Verify changes appear

### 6. Delete Project (1 minute)
- Click "Delete" button
- Confirm deletion
- Verify project is removed from list

### 7. Show Responsive Design (1 minute)
- Resize browser window
- Demonstrate mobile/tablet layouts

## 🔍 Testing the API

You can test the API using Postman or curl:

### Create a Project
```bash
curl -X POST http://localhost:8080/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Test Project",
    "description": "Testing the API",
    "techStack": "Java, Spring Boot",
    "githubUrl": "https://github.com/test/repo",
    "liveDemoUrl": "https://test.com"
  }'
```

### Get All Projects
```bash
curl http://localhost:8080/api/projects
```

### Get Project by ID
```bash
curl http://localhost:8080/api/projects/1
```

### Update Project
```bash
curl -X PUT http://localhost:8080/api/projects/1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Project",
    "description": "Updated description",
    "techStack": "Java, Spring Boot, React",
    "githubUrl": "https://github.com/test/repo",
    "liveDemoUrl": "https://test.com"
  }'
```

### Delete Project
```bash
curl -X DELETE http://localhost:8080/api/projects/1
```

## ⚠️ Known Limitations

1. **No Authentication**: The application does not implement user authentication or authorization
2. **In-Memory Database**: Data is lost when the backend restarts (use PostgreSQL for persistence)
3. **No Image Upload**: Projects don't support image uploads
4. **Basic Validation**: Only client-side and basic server-side validation
5. **No Pagination on Backend**: Backend returns all projects (frontend handles pagination)
6. **No Unit Tests**: This is a demonstration project without comprehensive test coverage

## 🔮 Future Enhancements

- Add user authentication and authorization
- Implement PostgreSQL for persistent storage
- Add project image uploads
- Add tags/categories for projects
- Implement server-side pagination and sorting
- Add comprehensive unit and integration tests
- Add project analytics and statistics
- Implement dark mode theme
- Add export functionality (PDF, CSV)

## 📚 Learning Outcomes

This project demonstrates:

✅ **Backend Development**
- Spring Boot application structure
- RESTful API design
- JPA/Hibernate ORM
- Layered architecture
- Exception handling
- CORS configuration

✅ **Frontend Development**
- React functional components and hooks
- React Router for navigation
- API integration with Axios
- Form validation
- State management
- Responsive CSS design

✅ **Software Engineering**
- OOP principles
- Design patterns
- Clean code practices
- Git version control
- Project documentation

## 👨‍💻 Author

Created as a demonstration of full-stack development skills using Spring Boot and React.

## 📄 License

This project is created for educational purposes.

---

**Built with ❤️ using Spring Boot & React**
