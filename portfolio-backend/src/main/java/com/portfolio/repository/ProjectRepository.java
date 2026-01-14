package com.portfolio.repository;

import com.portfolio.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Project Repository Interface
 * 
 * This interface demonstrates:
 * - Design Pattern: Repository Pattern (abstracts data access logic)
 * - OOP Principle: Abstraction (hides implementation details of data access)
 * 
 * By extending JpaRepository, we get:
 * - Basic CRUD operations (save, findById, findAll, delete, etc.)
 * - No need to write implementation code
 * - Spring Data JPA provides the implementation at runtime
 * 
 * This is a key part of the layered architecture:
 * Controller -> Service -> Repository -> Database
 */
@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
    
    // JpaRepository provides all basic CRUD methods:
    // - save(Project) - create or update
    // - findById(Long) - find by ID
    // - findAll() - get all projects
    // - deleteById(Long) - delete by ID
    // - count() - count all projects
    // - exists(Long) - check if exists
    
    // We can add custom query methods here if needed
    // For example: List<Project> findByTitleContaining(String keyword);
}
