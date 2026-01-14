import { Link } from 'react-router-dom';
import './ProjectCard.css';

/**
 * ProjectCard Component
 * 
 * Reusable card component for displaying project summary
 * Demonstrates component reusability and props usage
 * 
 * @param {Object} project - Project data
 * @param {Function} onDelete - Delete handler function
 */
const ProjectCard = ({ project, onDelete }) => {
    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete "${project.title}"?`)) {
            onDelete(project.id);
        }
    };

    return (
        <div className="project-card">
            <div className="card-header">
                <h3>{project.title}</h3>
            </div>
            <div className="card-body">
                <p className="description">
                    {project.description || 'No description provided'}
                </p>
                {project.techStack && (
                    <div className="tech-stack">
                        <strong>Tech Stack:</strong> {project.techStack}
                    </div>
                )}
                <div className="card-links">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="external-link"
                        >
                            GitHub
                        </a>
                    )}
                    {project.liveDemoUrl && (
                        <a
                            href={project.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="external-link"
                        >
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
            <div className="card-actions">
                <Link to={`/project/${project.id}`} className="btn btn-view">
                    View Details
                </Link>
                <Link to={`/edit/${project.id}`} className="btn btn-edit">
                    Edit
                </Link>
                <button onClick={handleDelete} className="btn btn-delete">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;
