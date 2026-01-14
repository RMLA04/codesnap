import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import ProjectList from './pages/ProjectList';
import ProjectDetails from './pages/ProjectDetails';
import CreateProject from './pages/CreateProject';
import EditProject from './pages/EditProject';
import './App.css';

/**
 * Main App Component
 * 
 * This component demonstrates:
 * - React Router setup for client-side routing
 * - Component composition
 * - Application structure
 * 
 * Routes:
 * - / : Project list page
 * - /project/:id : Project details page
 * - /create : Create new project page
 * - /edit/:id : Edit project page
 */
function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<ProjectList />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
              <Route path="/create" element={<CreateProject />} />
              <Route path="/edit/:id" element={<EditProject />} />
            </Routes>
          </main>
          <footer className="footer">
            <p>&copy; 2026 Portfolio Management System. Built with React & Spring Boot.</p>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
