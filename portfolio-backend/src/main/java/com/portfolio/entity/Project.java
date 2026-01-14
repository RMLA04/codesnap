package com.portfolio.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Project Entity - Represents a portfolio project in the database
 * 
 * This class demonstrates:
 * - OOP Principle: Encapsulation (private fields with getters/setters via Lombok)
 * - Design Pattern: Entity pattern (JPA entity mapping)
 * - JPA annotations for database mapping
 * 
 * The @Entity annotation marks this class as a JPA entity
 * The @Data annotation (Lombok) generates getters, setters, toString, equals, and hashCode
 */
@Entity
@Table(name = "projects")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Project {

    /**
     * Primary key - auto-generated ID
     * @GeneratedValue with IDENTITY strategy lets the database handle ID generation
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * Project title - required field
     * @NotBlank ensures the title is not null or empty
     */
    @NotBlank(message = "Title is required")
    @Column(nullable = false)
    private String title;

    /**
     * Project description - optional field
     * @Column with length allows longer text
     */
    @Column(length = 1000)
    private String description;

    /**
     * Technologies used in the project
     * Example: "React, Spring Boot, PostgreSQL"
     */
    @Column(name = "tech_stack")
    private String techStack;

    /**
     * GitHub repository URL - optional
     */
    @Column(name = "github_url")
    private String githubUrl;

    /**
     * Live demo URL - optional
     */
    @Column(name = "live_demo_url")
    private String liveDemoUrl;
}
