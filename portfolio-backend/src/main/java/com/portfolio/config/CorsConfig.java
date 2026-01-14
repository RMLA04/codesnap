package com.portfolio.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * CORS Configuration
 * 
 * This class configures Cross-Origin Resource Sharing (CORS) to allow
 * the frontend (running on a different port) to communicate with the backend.
 * 
 * In development:
 * - Backend runs on http://localhost:8080
 * - Frontend runs on http://localhost:5173 (Vite default)
 * 
 * CORS allows the frontend to make requests to the backend despite
 * being on different origins (different ports).
 */
@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**")
                        .allowedOrigins("*") // Allow all origins for easier deployment testing
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                        .allowedHeaders("*")
                        .allowCredentials(true);
            }
        };
    }
}
