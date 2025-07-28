import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Data = () => {
    const [mode, setMode] = useState('signup'); // 'signup' or 'login'
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        // Store user data in localStorage
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        
        Swal.fire({
            title: 'Success!',
            text: 'Your account has been created.',
            icon: 'success',
        }).then(() => {
                navigate('/'); // Redirect to homepage after login
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");

        if (email === storedEmail && password === storedPassword) {
            const storedUsername = localStorage.getItem("username");
            Swal.fire({
                title: 'Login Successful!',
                text: `Welcome, ${storedUsername}!`,
                icon: 'success',
            }).then(() => {
                navigate('/'); // Redirect to homepage after login
            });
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Invalid login credentials!',
                icon: 'error',
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">{mode === 'signup' ? 'Create an Account' : 'Login'}</h2>
                <form onSubmit={mode === 'signup' ? handleSignup : handleLogin}>
                    {mode === 'signup' && (
                        <div className="mb-4">
                            <label className="block text-gray-700" htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                className="mt-1 p-3 w-full border rounded"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                    )}
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 p-3 w-full border rounded"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 p-3 w-full border rounded"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-200"
                    >
                        {mode === 'signup' ? 'Sign Up' : 'Login'}
                    </button>
                </form>
                {mode === 'login' && (
                    <div className="mt-4 text-center">
                        <p className="text-gray-600">
                            Don't have an account?{" "}
                            <button onClick={() => setMode('signup')} className="text-blue-500 hover:underline">
                                Sign Up
                            </button>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Data;