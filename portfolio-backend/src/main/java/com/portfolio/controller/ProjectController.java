package com.portfolio.controller;

import com.portfolio.dto.ProjectDTO;
import com.portfolio.service.ProjectService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Project REST Controller
 * 
 * This class demonstrates:
 * - Design Pattern: MVC Pattern (Controller handles HTTP requests/responses)
 * - Design Pattern: REST API design
 * - OOP Principle: Single Responsibility (handles only HTTP layer)
 * 
 * The Controller layer:
 * - Handles HTTP requests and responses
 * - Validates input using @Valid
 * - Delegates business logic to Service layer
 * - Returns appropriate HTTP status codes
 * 
 * REST API Endpoints:
 * - GET    /api/projects       - Get all projects
 * - GET    /api/projects/{id}  - Get project by ID
 * - POST   /api/projects       - Create new project
 * - PUT    /api/projects/{id}  - Update project
 * - DELETE /api/projects/{id}  - Delete project
 */
@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "*") // Allow requests from any origin (for development)
public class ProjectController {

    private final ProjectService projectService;

    /**
     * Constructor-based dependency injection
     */
    @Autowired
    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    /**
     * GET /api/projects
     * Get all projects
     * 
     * @return List of all projects with 200 OK status
     */
    @GetMapping
    public ResponseEntity<List<ProjectDTO>> getAllProjects() {
        List<ProjectDTO> projects = projectService.getAllProjects();
        return new ResponseEntity<>(projects, HttpStatus.OK);
    }

    /**
     * GET /api/projects/{id}
     * Get project by ID
     * 
     * @param id Project ID
     * @return Project with 200 OK status, or 404 NOT FOUND if not exists
     */
    @GetMapping("/{id}")
    public ResponseEntity<ProjectDTO> getProjectById(@PathVariable Long id) {
        ProjectDTO project = projectService.getProjectById(id);
        return new ResponseEntity<>(project, HttpStatus.OK);
    }

    /**
     * POST /api/projects
     * Create new project
     * 
     * @param projectDTO Project data (validated)
     * @return Created project with 201 CREATED status
     */
    @PostMapping
    public ResponseEntity<ProjectDTO> createProject(@Valid @RequestBody ProjectDTO projectDTO) {
        ProjectDTO createdProject = projectService.createProject(projectDTO);
        return new ResponseEntity<>(createdProject, HttpStatus.CREATED);
    }

    /**
     * PUT /api/projects/{id}
     * Update existing project
     * 
     * @param id Project ID
     * @param projectDTO Updated project data (validated)
     * @return Updated project with 200 OK status, or 404 NOT FOUND if not exists
     */
    @PutMapping("/{id}")
    public ResponseEntity<ProjectDTO> updateProject(
            @PathVariable Long id,
            @Valid @RequestBody ProjectDTO projectDTO) {
        ProjectDTO updatedProject = projectService.updateProject(id, projectDTO);
        return new ResponseEntity<>(updatedProject, HttpStatus.OK);
    }

    /**
     * DELETE /api/projects/{id}
     * Delete project
     * 
     * @param id Project ID
     * @return 204 NO CONTENT status on success, or 404 NOT FOUND if not exists
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProject(@PathVariable Long id) {
        projectService.deleteProject(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
