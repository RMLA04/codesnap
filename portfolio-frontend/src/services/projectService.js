import axios from 'axios';
import API_CONFIG from '../config/config';

/**
 * Project Service - API Layer
 * 
 * This module demonstrates:
 * - Design Pattern: Service Layer (separates API logic from UI components)
 * - OOP Principle: Separation of Concerns (API calls isolated from components)
 * 
 * Benefits:
 * - Reusable API functions
 * - Easy to test
 * - Centralized error handling
 * - Components don't need to know about API details
 */

const API_URL = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.PROJECTS}`;

/**
 * Get all projects
 * @returns {Promise} Promise resolving to array of projects
 */
export const getAllProjects = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }
};

/**
 * Get project by ID
 * @param {number} id - Project ID
 * @returns {Promise} Promise resolving to project object
 */
export const getProjectById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching project ${id}:`, error);
        throw error;
    }
};

/**
 * Create new project
 * @param {Object} projectData - Project data
 * @returns {Promise} Promise resolving to created project
 */
export const createProject = async (projectData) => {
    try {
        const response = await axios.post(API_URL, projectData);
        return response.data;
    } catch (error) {
        console.error('Error creating project:', error);
        throw error;
    }
};

/**
 * Update existing project
 * @param {number} id - Project ID
 * @param {Object} projectData - Updated project data
 * @returns {Promise} Promise resolving to updated project
 */
export const updateProject = async (id, projectData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, projectData);
        return response.data;
    } catch (error) {
        console.error(`Error updating project ${id}:`, error);
        throw error;
    }
};

/**
 * Delete project
 * @param {number} id - Project ID
 * @returns {Promise} Promise resolving when deletion is complete
 */
export const deleteProject = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error(`Error deleting project ${id}:`, error);
        throw error;
    }
};
