package com.portfolio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Main Spring Boot Application Class
 * 
 * This is the entry point for the Portfolio Management System backend.
 * The @SpringBootApplication annotation enables:
 * - Auto-configuration
 * - Component scanning
 * - Configuration properties
 * 
 * Design Pattern: This follows the Spring Boot application pattern
 */
@SpringBootApplication
public class PortfolioApplication {

    public static void main(String[] args) {
        SpringApplication.run(PortfolioApplication.class, args);
        System.out.println("\n==============================================");
        System.out.println("Portfolio Management System Backend Started!");
        System.out.println("API Base URL: http://localhost:8080/api");
        System.out.println("H2 Console: http://localhost:8080/h2-console");
        System.out.println("==============================================\n");
    }
}
