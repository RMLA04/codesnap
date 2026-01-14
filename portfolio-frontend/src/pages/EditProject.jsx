import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProjectById, updateProject } from '../services/projectService';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import './ProjectForm.css';

/**
 * EditProject Page Component
 * 
 * Form for editing an existing project
 * Fetches project data and pre-fills the form
 */
const EditProject = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        techStack: '',
        githubUrl: '',
        liveDemoUrl: ''
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [fetchError, setFetchError] = useState(null);

    useEffect(() => {
        fetchProject();
    }, [id]);

    const fetchProject = async () => {
        try {
            setLoading(true);
            const data = await getProjectById(id);
            setFormData({
                title: data.title || '',
                description: data.description || '',
                techStack: data.techStack || '',
                githubUrl: data.githubUrl || '',
                liveDemoUrl: data.liveDemoUrl || ''
            });
        } catch (err) {
            setFetchError('Failed to load project. Project may not exist.');
        } finally {
            setLoading(false);
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.title.trim()) {
            newErrors.title = 'Title is required';
        }

        if (formData.githubUrl && !isValidUrl(formData.githubUrl)) {
            newErrors.githubUrl = 'Please enter a valid URL';
        }

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
            await updateProject(id, formData);
            navigate(`/project/${id}`);
        } catch (err) {
            alert('Failed to update project. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) return <LoadingSpinner />;
    if (fetchError) return <ErrorMessage message={fetchError} />;

    return (
        <div className="form-container">
            <div className="form-header">
                <h1>Edit Project</h1>
                <p>Update your project information</p>
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
                        {submitting ? 'Updating...' : 'Update Project'}
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate(`/project/${id}`)}
                        className="btn btn-cancel"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditProject;
