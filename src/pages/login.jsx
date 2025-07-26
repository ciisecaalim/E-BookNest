import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/footer";
import Header from "../Components/header";

function Login() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setUsername("");
        setEmail("");
        setPassword("");
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        setUsername("");
        setEmail("");
        setPassword("");
        navigate('/Data');
    };

    return (
        <div className="min-h-screen flex flex-col">
        
            <div className="flex flex-1 items-center justify-center">
                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700" htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                className="mt-1 p-2 w-full border border-gray-300 rounded"
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
                                className="mt-1 p-2 w-full border border-gray-300 rounded"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700" htmlFor="password">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    className="mt-1 p-2 w-full border border-gray-300 rounded"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <input type="checkbox" id="remember" className="mr-2" />
                            <label htmlFor="remember" className="text-gray-700">Remember Me</label>
                        </div>
                      <a href="/" className="px-8 py-2 bg-blue-900 text-white ml-[45%]">Login</a>
                    </form>
                    <div className="mt-4 text-center">
                        <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
                    </div>
                    <div className="mt-2 text-center">
                        <p className="text-gray-600">
                            Don't have an account? <a href="/Signup" className="text-blue-500 hover:underline">Sign Up</a>
                        </p>
                    </div>
                </div>
            </div>
         
        </div>
    );
}

export default Login