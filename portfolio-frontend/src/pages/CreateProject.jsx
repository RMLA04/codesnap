import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProject } from '../services/projectService';
import { motion } from 'framer-motion';
import { Save, X } from 'lucide-react';
import './ProjectForm.css';

const CreateProject = () => {
    const [project, setProject] = useState({
        title: '',
        description: '',
        techStack: '',
        githubUrl: '',
        liveDemoUrl: ''
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProject(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!project.title.trim()) newErrors.title = 'Title is required';
        if (!project.description.trim()) newErrors.description = 'Description is required';
        if (!project.techStack.trim()) newErrors.techStack = 'Tech stack is required';

        // URL validation
        const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
        if (project.githubUrl && !urlPattern.test(project.githubUrl)) {
            newErrors.githubUrl = 'Please enter a valid URL (e.g., https://github.com/user/repo)';
        }
        if (project.liveDemoUrl && !urlPattern.test(project.liveDemoUrl)) {
            newErrors.liveDemoUrl = 'Please enter a valid URL';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);
        try {
            await createProject(project);
            navigate('/');
        } catch (err) {
            setErrors({ submit: 'Failed to create project. Please check if backend is running.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <motion.div
                className="form-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <h2>Create New Project</h2>

                {errors.submit && (
                    <motion.div
                        className="error-banner"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                    >
                        {errors.submit}
                    </motion.div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                        <label>Project Title *</label>
                        <input
                            type="text"
                            name="title"
                            value={project.title}
                            onChange={handleChange}
                            className={errors.title ? 'error' : ''}
                            placeholder="e.g. E-Commerce Platform"
                        />
                        {errors.title && <span className="error-text">{errors.title}</span>}
                    </div>

                    <div className="form-group">
                        <label>Description *</label>
                        <textarea
                            name="description"
                            value={project.description}
                            onChange={handleChange}
                            className={errors.description ? 'error' : ''}
                            placeholder="Describe your project functionality and goals..."
                            rows="4"
                        />
                        {errors.description && <span className="error-text">{errors.description}</span>}
                    </div>

                    <div className="form-group">
                        <label>Tech Stack *</label>
                        <input
                            type="text"
                            name="techStack"
                            value={project.techStack}
                            onChange={handleChange}
                            className={errors.techStack ? 'error' : ''}
                            placeholder="e.g. React, Spring Boot, PostgreSQL"
                        />
                        {errors.techStack && <span className="error-text">{errors.techStack}</span>}
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>GitHub URL</label>
                            <input
                                type="text"
                                name="githubUrl"
                                value={project.githubUrl}
                                onChange={handleChange}
                                className={errors.githubUrl ? 'error' : ''}
                                placeholder="https://github.com/..."
                            />
                            {errors.githubUrl && <span className="error-text">{errors.githubUrl}</span>}
                        </div>

                        <div className="form-group">
                            <label>Live Demo URL</label>
                            <input
                                type="text"
                                name="liveDemoUrl"
                                value={project.liveDemoUrl}
                                onChange={handleChange}
                                className={errors.liveDemoUrl ? 'error' : ''}
                                placeholder="https://..."
                            />
                            {errors.liveDemoUrl && <span className="error-text">{errors.liveDemoUrl}</span>}
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="btn btn-outline" onClick={() => navigate('/')}>
                            <X size={18} /> Cancel
                        </button>
                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            {loading ? 'Saving...' : <><Save size={18} /> Create Project</>}
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default CreateProject;
