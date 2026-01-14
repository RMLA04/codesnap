import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProject } from '../services/projectService';
import './ProjectForm.css';

/**
 * CreateProject Page Component
 * 
 * Form for creating a new project
 * Includes client-side validation
 */
const CreateProject = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        techStack: '',
        githubUrl: '',
        liveDemoUrl: ''
    });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        // Title is required
        if (!formData.title.trim()) {
            newErrors.title = 'Title is required';
        }

        // Validate GitHub URL format if provided
        if (formData.githubUrl && !isValidUrl(formData.githubUrl)) {
            newErrors.githubUrl = 'Please enter a valid URL';
        }

        // Validate Live Demo URL format if provided
        if (formData.liveDemoUrl && !isValidUrl(formData.liveDemoUrl)) {
            newErrors.liveDemoUrl = 'Please enter a valid URL';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const isValidUrl = (url) => {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            setSubmitting(true);
            await createProject(formData);
            navigate('/');
        } catch (err) {
            alert('Failed to create project. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="form-container">
            <div className="form-header">
                <h1>Create New Project</h1>
                <p>Add a new project to your portfolio</p>
            </div>

            <form onSubmit={handleSubmit} className="project-form">
                <div className="form-group">
                    <label htmlFor="title">
                        Project Title <span className="required">*</span>
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className={errors.title ? 'error' : ''}
                        placeholder="Enter project title"
                    />
                    {errors.title && <span className="error-text">{errors.title}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Describe your project..."
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="techStack">Tech Stack</label>
                    <input
                        type="text"
                        id="techStack"
                        name="techStack"
                        value={formData.techStack}
                        onChange={handleChange}
                        placeholder="e.g., React, Spring Boot, PostgreSQL"
                    />
                    <small>Separate technologies with commas</small>
                </div>

                <div className="form-group">
                    <label htmlFor="githubUrl">GitHub URL</label>
                    <input
                        type="url"
                        id="githubUrl"
                        name="githubUrl"
                        value={formData.githubUrl}
                        onChange={handleChange}
                        className={errors.githubUrl ? 'error' : ''}
                        placeholder="https://github.com/username/repo"
                    />
                    {errors.githubUrl && <span className="error-text">{errors.githubUrl}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="liveDemoUrl">Live Demo URL</label>
                    <input
                        type="url"
                        id="liveDemoUrl"
                        name="liveDemoUrl"
                        value={formData.liveDemoUrl}
                        onChange={handleChange}
                        className={errors.liveDemoUrl ? 'error' : ''}
                        placeholder="https://your-project.com"
                    />
                    {errors.liveDemoUrl && <span className="error-text">{errors.liveDemoUrl}</span>}
                </div>

                <div className="form-actions">
                    <button
                        type="submit"
                        className="btn btn-submit"
                        disabled={submitting}
                    >
                        {submitting ? 'Creating...' : 'Create Project'}
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate('/')}
                        className="btn btn-cancel"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateProject;
