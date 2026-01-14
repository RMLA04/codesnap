import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

/**
 * Navbar Component
 * 
 * Navigation bar with active page highlighting
 * Uses React Router's Link for client-side navigation
 */
const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    Portfolio Manager
                </Link>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className={`nav-link ${isActive('/')}`}>
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/create" className={`nav-link ${isActive('/create')}`}>
                            Add Project
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
