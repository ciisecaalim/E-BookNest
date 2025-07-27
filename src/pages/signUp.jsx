import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Store user data in localStorage (only for demo purposes)
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        // Clear form fields
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        // Navigate to login page
        navigate('/login');
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-800 to-gray-900 text-white pt-28 pb-10">
            <div className="flex flex-1 items-center justify-center">
                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create an Account</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700" htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                className="mt-1 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                className="mt-1 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700" htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                className="mt-1 p-3 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-200"
                        >
                            Sign Up
                        </button>
                    </form>
                    <div className="mt-4 text-center">
                        <p className="text-gray-600">
                            Already have an account?{" "}
                            <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
