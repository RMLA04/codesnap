import './ErrorMessage.css';

/**
 * Error Message Component
 * 
 * Displays error messages to the user
 * @param {string} message - Error message to display
 */
const ErrorMessage = ({ message }) => {
    return (
        <div className="error-container">
            <div className="error-icon">⚠️</div>
            <p className="error-message">{message}</p>
        </div>
    );
};

export default ErrorMessage;
