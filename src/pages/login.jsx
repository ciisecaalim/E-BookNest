import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const storedUsername = localStorage.getItem("username");
        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");

        if (
            username === storedUsername &&
            email === storedEmail &&
            password === storedPassword
        ) {
            setUsername("");
            setEmail("");
            setPassword("");
            navigate("/Data");
        } else {
            alert("Invalid login credentials!");
        }
    };

    return (
        <div className="min-h-screen flex flex-col mt-28">
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
                        <button
                            type="submit"
                            className="px-8 py-2 bg-blue-900 text-white ml-[45%] rounded"
                        >
                            Login
                        </button>
                    </form>
                    <div className="mt-4 text-center">
                        <Link to="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</Link>
                    </div>
                    <div className="mt-2 text-center">
                        <p className="text-gray-600">
                            Don't have an account?{" "}
                            <Link to="/Signup" className="text-blue-500 hover:underline">Sign Up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
