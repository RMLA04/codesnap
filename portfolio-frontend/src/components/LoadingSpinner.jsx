import './LoadingSpinner.css';

/**
 * Loading Spinner Component
 * 
 * Reusable loading indicator displayed during API calls
 */
const LoadingSpinner = () => {
    return (
        <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading...</p>
        </div>
    );
};

export default LoadingSpinner;
