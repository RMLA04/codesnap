# Setup and Run Instructions

Follow these step-by-step instructions to get your Portfolio Management System up and running.

## 1. Maven is Already "Installed" (Locally)

I have downloaded a portable version of Maven for you in the `maven` folder. You do **not** need to install anything on your system.

## 2. Run the Backend (Spring Boot)

1.  Open your terminal in VS Code (or PowerShell).
2.  Navigate to the backend directory:
    ```powershell
    cd c:\Users\adolat.gharibshoeva\Desktop\codesnap\portfolio-backend
    ```
3.  Run the application using the **local Maven**:
    ```powershell
    c:\Users\adolat.gharibshoeva\Desktop\codesnap\maven\apache-maven-3.9.6\bin\mvn.cmd spring-boot:run
    ```
4.  Wait until you see the message: `Started PortfolioApplication in ... seconds`.
    *   The backend is now running at `http://localhost:8080`.
    *   **Keep this terminal open.**

## 3. Run the Frontend (React)

1.  Open a **new** terminal window (keep the backend one running).
2.  Navigate to the frontend directory:
    ```powershell
    cd c:\Users\adolat.gharibshoeva\Desktop\codesnap\portfolio-frontend
    ```
3.  Start the development server (dependencies are already installed):
    ```powershell
    npm run dev
    ```
4.  You will see output indicating the server is running, usually at `http://localhost:5173`.
    *   **Keep this terminal open.**

## 4. Access the Application

1.  Open your web browser (Chrome, Edge, etc.).
2.  Go to **[http://localhost:5173](http://localhost:5173)**.
3.  You should see the Portfolio Management System!

## Troubleshooting

*   **Port In Use**: If `8080` is taken, you can change the backend port in `portfolio-backend/src/main/resources/application.properties`.
*   **Database**: The app uses H2 in-memory database. All data will be reset when you stop the backend. Access the database console at `http://localhost:8080/h2-console`.
