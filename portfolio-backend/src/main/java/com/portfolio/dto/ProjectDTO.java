package com.portfolio.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Project Data Transfer Object (DTO)
 * 
 * This class demonstrates:
 * - Design Pattern: DTO Pattern (separates API layer from entity layer)
 * - OOP Principle: Separation of Concerns (API contracts separate from database entities)
 * 
 * DTOs are used to:
 * 1. Control what data is exposed through the API
 * 2. Add validation specific to API requests
 * 3. Prevent exposing internal entity structure
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProjectDTO {

    private Long id;

    @NotBlank(message = "Title is required")
    private String title;

    private String description;

    private String techStack;

    private String githubUrl;

    private String liveDemoUrl;
}
