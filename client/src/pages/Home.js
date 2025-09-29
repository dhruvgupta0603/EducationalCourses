// Home.js
import React from 'react';

const Home = () => {
    return (
        <div className="bg-gray-100 text-gray-800 min-h-screen">
            <header className="bg-blue-600 text-white p-6">
                <h1 className="text-4xl font-bold text-center">Welcome to Educational Courses</h1>
            </header>
            <main className="container mx-auto py-16 text-center">
                <h2 className="text-3xl font-bold mb-4">Learn Anytime, Anywhere</h2>
                <p className="text-lg mb-6">Join millions of learners and explore a variety of courses to enhance your skills.</p>
                <a href="/courses" className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700">Explore Courses</a>
            </main>
        </div>
    );
};

export default Home;