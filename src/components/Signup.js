import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css'; // Use the same CSS file for styling

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        console.log('Signing up with:', username, password);
        // Add actual signup logic here
    };

    return (
        <div className="auth-form-container">
        <h2 className="auth-form-title">Sign Up</h2>
        <form onSubmit={handleSignup}>
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
            Sign Up
            </button>
            <p className="auth-form-text">
            Already have an account? <Link to="/login">Login</Link>
            </p>
            <button className="auth-google-button">
            Continue with Google
            </button>
        </form>
        </div>
    );
};

export default Signup;
