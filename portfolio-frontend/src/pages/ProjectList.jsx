import { useState, useEffect } from 'react';
import { getAllProjects, deleteProject } from '../services/projectService';
import ProjectCard from '../components/ProjectCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Grid, List as ListIcon } from 'lucide-react';
import API_CONFIG from '../config/config';
import './ProjectList.css';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [layout, setLayout] = useState('grid');

    // Pagination
    const projectsPerPage = 6;
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

    useEffect(() => {
        fetchProjects();
    }, []);

    useEffect(() => {
        const results = projects.filter(project => {
            const matchesTitle = project.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesStack = project.techStack && project.techStack.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesTitle || matchesStack;
        });
        setFilteredProjects(results);
        setCurrentPage(1);
    }, [searchTerm, projects]);

    const fetchProjects = async () => {
        try {
            const data = await getAllProjects();
            setProjects(data);
            setFilteredProjects(data);
            setLoading(false);
        } catch (err) {
            setError(`Failed to load projects from ${API_CONFIG.BASE_URL}. Please check if backend is running.`);
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            try {
                await deleteProject(id);
                setProjects(projects.filter(project => project.id !== id));
            } catch (err) {
                setError('Failed to delete project.');
            }
        }
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Get current projects
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <div className="container">
            <motion.div
                className="list-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1>My Projects</h1>
                <div className="controls">
                    <div className="search-bar">
                        <Search size={20} className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </motion.div>

            {filteredProjects.length === 0 ? (
                <motion.div
                    className="no-results"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <p>No projects found matching current filter.</p>
                </motion.div>
            ) : (
                <motion.div
                    className="projects-grid"
                    layout
                >
                    <AnimatePresence>
                        {currentProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: index * 0.1 }}
                                layout
                            >
                                <ProjectCard
                                    project={project}
                                    onDelete={handleDelete}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            )}

            {totalPages > 1 && (
                <div className="pagination">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="btn btn-outline"
                    >
                        Previous
                    </button>
                    <span className="page-info">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="btn btn-outline"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProjectList;
