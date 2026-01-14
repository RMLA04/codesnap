import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Edit2, Trash2, Code2, FolderGit2 } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard = ({ project, onDelete }) => {
    return (
        <motion.div
            className="project-card"
            whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="card-header">
                <div className="icon-wrapper">
                    <FolderGit2 size={24} />
                </div>
                <div className="card-actions">
                    <Link to={`/edit/${project.id}`} className="action-btn edit" title="Edit">
                        <Edit2 size={16} />
                    </Link>
                    <button onClick={() => onDelete(project.id)} className="action-btn delete" title="Delete">
                        <Trash2 size={16} />
                    </button>
                </div>
            </div>

            <div className="card-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="tech-stack">
                    <Code2 size={14} className="tech-icon" />
                    <span>{project.techStack}</span>
                </div>

                <div className="project-links">
                    {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="link-btn github">
                            <Github size={16} />
                            Code
                        </a>
                    )}
                    {project.liveDemoUrl && (
                        <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="link-btn demo">
                            <ExternalLink size={16} />
                            Live Demo
                        </a>
                    )}
                    <Link to={`/project/${project.id}`} className="link-btn details">
                        Details
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        techStack: PropTypes.string,
        githubUrl: PropTypes.string,
        liveDemoUrl: PropTypes.string
    }).isRequired,
    onDelete: PropTypes.func.isRequired
};

export default ProjectCard;
