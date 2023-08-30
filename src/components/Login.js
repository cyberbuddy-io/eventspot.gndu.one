import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css'; // Create a CSS file for styling

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Logging in with:', username, password);
        // Add actual login logic here
    };

    return (
        <div className="auth-form-container">
        <h2 className="auth-form-title">Login</h2>
        <form onSubmit={handleLogin}>
            <div className="auth-form-group">
            <label htmlFor="username" className="auth-form-label">
                Username
            </label>
            <input
                type="text"
                className="auth-form-input"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            </div>
            <div className="auth-form-group">
            <label htmlFor="password" className="auth-form-label">
                Password
            </label>
            <input
                type="password"
                className="auth-form-input"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button type="submit" className="auth-form-button">
            Login
            </button>
            <p className="auth-form-text">
            Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
            <button className="auth-google-button">
            Continue with Google
            </button>
        </form>
        </div>
    );
};

export default Login;
