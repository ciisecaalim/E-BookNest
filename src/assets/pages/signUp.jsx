import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../header/header";
import Footer from "../../header/footer";

function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Here you would typically handle signup logic, like calling an API

        // Clear input fields after submission
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        // Redirect to login page
        navigate('/login');
    };

    return (
 
        <div className=" items-center justify-center h-screen bg-gradient-to-r bg-gray-800 text-white ">

            <Header />

            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mt-36 ml-[35%]">
                <h2 className="text-3xl font-bold mb-6 text-center">Create an Account</h2>
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
                    <button className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-200" type="submit">Sign Up</button>
                </form>
                <div className="mt-4 text-center">
                    <p className="text-gray-600">Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a></p>
                </div>
            </div>

<div className="pt-48">
 

<Footer />

</div>










        </div>
    );
}

export default Signup;