import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import { getAllProjects, deleteProject } from '../services/projectService';
import './ProjectList.css';

/**
 * ProjectList Page Component
 * 
 * Main page displaying all projects with:
 * - Search/filter functionality
 * - Pagination
 * - Loading and error states
 * - Delete functionality
 * 
 * Demonstrates:
 * - React Hooks (useState, useEffect)
 * - API integration
 * - State management
 * - Error handling
 */
const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 6;
    const navigate = useNavigate();

    // Fetch projects on component mount
    useEffect(() => {
        fetchProjects();
    }, []);

    // Filter projects when search term changes
    useEffect(() => {
        filterProjects();
    }, [searchTerm, projects]);

    const fetchProjects = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await getAllProjects();
            setProjects(data);
            setFilteredProjects(data);
        } catch (err) {
            setError('Failed to load projects. Please make sure the backend is running.');
        } finally {
            setLoading(false);
        }
    };

    const filterProjects = () => {
        if (!searchTerm.trim()) {
            setFilteredProjects(projects);
            return;
        }

        const filtered = projects.filter(project =>
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (project.techStack && project.techStack.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        setFilteredProjects(filtered);
        setCurrentPage(1); // Reset to first page when filtering
    };

    const handleDelete = async (id) => {
        try {
            await deleteProject(id);
            // Refresh projects after deletion
            fetchProjects();
        } catch (err) {
            alert('Failed to delete project. Please try again.');
        }
    };

    // Pagination logic
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <div className="project-list-container">
            <div className="page-header">
                <h1>My Portfolio Projects</h1>
                <p>Manage and showcase your amazing projects</p>
            </div>

            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search by title or tech stack..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>

            {filteredProjects.length === 0 ? (
                <div className="no-projects">
                    <p>No projects found. {searchTerm ? 'Try a different search term.' : 'Start by adding your first project!'}</p>
                    <button onClick={() => navigate('/create')} className="btn-primary">
                        Add Your First Project
                    </button>
                </div>
            ) : (
                <>
                    <div className="projects-grid">
                        {currentProjects.map(project => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onDelete={handleDelete}
                            />
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <div className="pagination">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="pagination-btn"
                            >
                                Previous
                            </button>
                            <span className="page-info">
                                Page {currentPage} of {totalPages}
                            </span>
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="pagination-btn"
                            >
                                Next
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default ProjectList;
