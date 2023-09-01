import React, { useState } from 'react';
import './AuthForm.css';
import { Link } from 'react-router-dom';
import { auth, googleAuthProvider, signInWithPopup } from '../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';


const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState({ error: false, msg: "" });

    const HandleSignup = async (e) => {
        e.preventDefault();
        setMessage({ error: false, msg: "" });

    if (username === "" || password === "") {
        setMessage({ error: true, msg: "All fields are mandatory!" });
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, username, password);
        console.log('User signed up successfully:', userCredential.user);
        alert('User signed up successfully!');

        const db = getFirestore();
        const userDocRef = doc(db, 'users', userCredential.user.uid);
        await setDoc(userDocRef, {
            username: username,
            password: password,
            // Any other user data you want to store
        });
        alert('User signed up successfully!');
    } catch (error) {
        console.error('Signup error:', error);
        alert('Signup error. Please try again.');
    }
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithPopup(auth, googleAuthProvider);
        } catch (error) {
            console.error('Google sign-in error:', error);
            alert('Google sign-in error. Please try again.');
        }
    };

    return (
        <div className="auth-form-container">
        <h2 className="auth-form-title">Sign Up</h2>

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
            <button className="auth-form-button" onClick={HandleSignup}>
            Sign Up
            </button>
            <p className="auth-form-text">
            Already have an account? <Link to="/login">Login</Link>
            </p>
            <button onClick={handleGoogleSignIn} className="auth-google-button">
                Continue with Google
            </button>
        </div>
    );
};

export default Signup;
