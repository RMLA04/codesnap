import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProjectById, updateProject } from '../services/projectService';
import LoadingSpinner from '../components/LoadingSpinner';
import { motion } from 'framer-motion';
import { Save, X } from 'lucide-react';
import './ProjectForm.css';

const EditProject = () => {
    const { id } = useParams();
    const [project, setProject] = useState({
        title: '',
        description: '',
        techStack: '',
        githubUrl: '',
        liveDemoUrl: ''
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProject();
    }, [id]);

    const fetchProject = async () => {
        try {
            const data = await getProjectById(id);
            setProject(data);
            setLoading(false);
        } catch (err) {
            setErrors({ submit: 'Failed to load project data.' });
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProject(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!project.title.trim()) newErrors.title = 'Title is required';
        if (!project.description.trim()) newErrors.description = 'Description is required';
        if (!project.techStack.trim()) newErrors.techStack = 'Tech stack is required';

        const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
        if (project.githubUrl && !urlPattern.test(project.githubUrl)) {
            newErrors.githubUrl = 'Please enter a valid URL';
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
            await updateProject(id, project);
            navigate('/');
        } catch (err) {
            setErrors({ submit: 'Failed to update project.' });
            setLoading(false);
        }
    };

    if (loading) return <LoadingSpinner />;

    return (
        <div className="container">
            <motion.div
                className="form-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <h2>Edit Project</h2>

                {errors.submit && (
                    <motion.div className="error-banner">
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
                            />
                            {errors.liveDemoUrl && <span className="error-text">{errors.liveDemoUrl}</span>}
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="btn btn-outline" onClick={() => navigate('/')}>
                            <X size={18} /> Cancel
                        </button>
                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            {loading ? 'Saving...' : <><Save size={18} /> Update Project</>}
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default EditProject;
