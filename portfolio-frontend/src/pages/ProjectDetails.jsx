import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { getProjectById, deleteProject } from '../services/projectService';
import './ProjectDetails.css';

/**
 * ProjectDetails Page Component
 * 
 * Displays full details of a single project
 * Fetches project by ID from URL parameter
 */
const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProject();
    }, [id]);

    const fetchProject = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getProjectById(id);
            setProject(data);
        } catch (err) {
            setError('Failed to load project details. Project may not exist.');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (window.confirm(`Are you sure you want to delete "${project.title}"?`)) {
            try {
                await deleteProject(id);
                navigate('/');
            } catch (err) {
                alert('Failed to delete project. Please try again.');
            }
        }
    };

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message={error} />;
    if (!project) return <ErrorMessage message="Project not found" />;

    return (
        <div className="project-details-container">
            <div className="details-header">
                <h1>{project.title}</h1>
                <div className="action-buttons">
                    <Link to={`/edit/${project.id}`} className="btn btn-edit">
                        Edit Project
                    </Link>
                    <button onClick={handleDelete} className="btn btn-delete">
                        Delete Project
                    </button>
                </div>
            </div>

            <div className="details-content">
                <div className="detail-section">
                    <h3>Description</h3>
                    <p>{project.description || 'No description provided'}</p>
                </div>

                {project.techStack && (
                    <div className="detail-section">
                        <h3>Technologies Used</h3>
                        <div className="tech-badges">
                            {project.techStack.split(',').map((tech, index) => (
                                <span key={index} className="tech-badge">
                                    {tech.trim()}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                <div className="detail-section">
                    <h3>Project Links</h3>
                    <div className="project-links">
                        {project.githubUrl ? (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link-button"
                            >
                                🔗 View on GitHub
                            </a>
                        ) : (
                            <p className="no-link">No GitHub link provided</p>
                        )}
                        {project.liveDemoUrl ? (
                            <a
                                href={project.liveDemoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="link-button"
                            >
                                🚀 View Live Demo
                            </a>
                        ) : (
                            <p className="no-link">No live demo link provided</p>
                        )}
                    </div>
                </div>
            </div>

            <div className="back-button-container">
                <Link to="/" className="btn btn-back">
                    ← Back to Projects
                </Link>
            </div>
        </div>
    );
};

export default ProjectDetails;
