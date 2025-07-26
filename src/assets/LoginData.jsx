// Home.js
import React from 'react';

const Data = () => {
    const username = localStorage.getItem('username') || 'Guest';

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm text-center">
                <h2 className="text-2xl font-bold mb-6"><a href="/">Welcome, {username}!</a> </h2>
                <p><a href="/"> Your login has been successful! </a></p>
                <p><a href="/">You are now logged in.</a> </p>
                <p> <a href="/">Enjoy your stay!</a> </p>
            </div>
        </div>
    );
};

export default Data;