import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { Sun, Moon, Layout, PlusCircle } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <motion.div
                        initial={{ rotate: -10 }}
                        animate={{ rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <Layout size={28} />
                    </motion.div>
                    <span>Portfolio</span>
                </Link>

                <div className="navbar-links">
                    <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                        Projects
                        {location.pathname === '/' && (
                            <motion.div className="active-indicator" layoutId="activeNav" />
                        )}
                    </Link>

                    <Link to="/create" className={`nav-link ${location.pathname === '/create' ? 'active' : ''}`}>
                        <PlusCircle size={18} />
                        <span>Add Project</span>
                        {location.pathname === '/create' && (
                            <motion.div className="active-indicator" layoutId="activeNav" />
                        )}
                    </Link>

                    <motion.button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </motion.button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
