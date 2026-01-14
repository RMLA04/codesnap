# ☁️ Deployment Guide

This guide will help you deploy your Portfolio Management System to the web so anyone can access it!

## Prerequisites

1.  **GitHub Account**: You need to push your code to a GitHub repository.
2.  **Render Account**: For hosting the **Backend** (free tier available).
3.  **Vercel Account**: For hosting the **Frontend** (free tier available).

---

## Part 1: Push to GitHub

1.  Create a new repository on [GitHub](https://github.com/new) named `portfolio-management-system`.
2.  **Do NOT** check "Initialize with README" .
3.  Push your code:
    ```bash
    # Run these commands in your VS Code terminal (root folder)
    git remote add origin https://github.com/<YOUR_USERNAME>/portfolio-management-system.git
    git branch -M master
    git push -u origin master
    ```

---

## Part 2: Deploy Backend to Render

1.  Go to [dashboard.render.com](https://dashboard.render.com/).
2.  Click **"New +"** -> **"Web Service"**.
3.  Connect your GitHub repository.
4.  **Configuration**:
    *   **Name**: `portfolio-backend`
    *   **Region**: Closest to you (e.g., Frankfurt, Oregon)
    *   **Runtime**: **Docker** (We added a Dockerfile for you!)
    *   **Instance Type**: Free
5.  Click **"Create Web Service"**.
6.  **Wait**: It will take a few minutes to build and deploy.
7.  **Copy URL**: Once live, copy the URL (e.g., `https://portfolio-backend-xyz.onrender.com`).
    *   *Note: The first request might be slow as the free tier spins down after inactivity.*

---

## Part 3: Deploy Frontend to Vercel

1.  Go to [vercel.com](https://vercel.com/dashboard).
2.  Click **"Add New..."** -> **"Project"**.
3.  Import your GitHub repository.
4.  **Framework Preset**: It should auto-detect **Vite**.
5.  **Root Directory**: Click "Edit" and select `portfolio-frontend`.
6.  **Environment Variables**:
    *   **Name**: `VITE_API_URL`
    *   **Value**: Paste your Render Backend URL + `/api` (e.g., `https://portfolio-backend-xyz.onrender.com/api`)
7.  Click **"Deploy"**.
8.  **Wait**: It will install dependencies and build.
9.  **Done!** You will get a link (e.g., `https://portfolio-management-system.vercel.app`).

---

## Part 4: Final Testing

1.  Open your **Vercel** link.
2.  The app should load effectively.
3.  Try creating a project. It should save to the H2 database on Render.
    *   *Warning: Since we use H2 (In-Memory), if the Render server restarts (which happens on free tier), your data will be wiped. For permanent data, you would need a PostgreSQL database.*

## Troubleshooting

*   **Frontend says "Failed to load"**: 
    *   Check if the **Backend** is awake (open the Render URL in a new tab to wake it up).
    *   Check if the `VITE_API_URL` variable in Vercel is correct (must end with `/api`).
*   **CORS Error**: We configured the backend to allow all origins (`*`), so this shouldn't happen.
