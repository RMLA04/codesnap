package com.portfolio.service;

import com.portfolio.dto.ProjectDTO;
import com.portfolio.entity.Project;
import com.portfolio.exception.ResourceNotFoundException;
import com.portfolio.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Project Service Layer
 * 
 * This class demonstrates:
 * - Design Pattern: Service Layer Pattern (business logic separation)
 * - OOP Principle: Single Responsibility (handles only business logic)
 * - OOP Principle: Dependency Injection (repository injected via constructor)
 * 
 * The Service layer:
 * - Contains business logic
 * - Sits between Controller and Repository
 * - Converts between Entity and DTO
 * - Handles data validation and transformation
 * 
 * Layered Architecture:
 * Controller (REST API) -> Service (Business Logic) -> Repository (Data Access) -> Database
 */
@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    /**
     * Constructor-based dependency injection
     * This is the recommended way to inject dependencies in Spring
     */
    @Autowired
    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    /**
     * Get all projects
     * Converts Entity list to DTO list
     */
    public List<ProjectDTO> getAllProjects() {
        return projectRepository.findAll()
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    /**
     * Get project by ID
     * Throws ResourceNotFoundException if not found
     */
    public ProjectDTO getProjectById(Long id) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Project", "id", id));
        return convertToDTO(project);
    }

    /**
     * Create new project
     * Converts DTO to Entity, saves, and returns DTO
     */
    public ProjectDTO createProject(ProjectDTO projectDTO) {
        Project project = convertToEntity(projectDTO);
        Project savedProject = projectRepository.save(project);
        return convertToDTO(savedProject);
    }

    /**
     * Update existing project
     * Finds existing project, updates fields, saves, and returns DTO
     */
    public ProjectDTO updateProject(Long id, ProjectDTO projectDTO) {
        Project existingProject = projectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Project", "id", id));

        // Update fields
        existingProject.setTitle(projectDTO.getTitle());
        existingProject.setDescription(projectDTO.getDescription());
        existingProject.setTechStack(projectDTO.getTechStack());
        existingProject.setGithubUrl(projectDTO.getGithubUrl());
        existingProject.setLiveDemoUrl(projectDTO.getLiveDemoUrl());

        Project updatedProject = projectRepository.save(existingProject);
        return convertToDTO(updatedProject);
    }

    /**
     * Delete project by ID
     * Throws ResourceNotFoundException if not found
     */
    public void deleteProject(Long id) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Project", "id", id));
        projectRepository.delete(project);
    }

    /**
     * Helper method: Convert Entity to DTO
     * This demonstrates the DTO pattern - separating internal representation from API
     */
    private ProjectDTO convertToDTO(Project project) {
        return new ProjectDTO(
            project.getId(),
            project.getTitle(),
            project.getDescription(),
            project.getTechStack(),
            project.getGithubUrl(),
            project.getLiveDemoUrl()
        );
    }

    /**
     * Helper method: Convert DTO to Entity
     */
    private Project convertToEntity(ProjectDTO dto) {
        Project project = new Project();
        project.setTitle(dto.getTitle());
        project.setDescription(dto.getDescription());
        project.setTechStack(dto.getTechStack());
        project.setGithubUrl(dto.getGithubUrl());
        project.setLiveDemoUrl(dto.getLiveDemoUrl());
        return project;
    }
}
