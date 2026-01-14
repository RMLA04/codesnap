/**
 * API Configuration
 * 
 * This file centralizes the backend API URL configuration.
 * This demonstrates best practice: keeping configuration separate from code.
 * 
 * Benefits:
 * - Easy to change API URL for different environments
 * - No hard-coded URLs in components
 * - Single source of truth for API configuration
 */

const API_CONFIG = {
    // Vercel uses VITE_ prefix for env vars
    BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:8080/api',
    ENDPOINTS: {
        PROJECTS: '/projects'
    }
};

export default API_CONFIG;
