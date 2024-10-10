import React from 'react';

const About: React.FC = () => {
    return (
        <div className="about-container p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">About Us</h1>
            <p className="text-lg mb-2 text-gray-800 dark:text-gray-200">
            Welcome to Español con Amor! We are dedicated to helping you learn Spanish with love and passion.
            </p>
            <p className="text-lg mb-2 text-gray-800 dark:text-gray-200">
            Our mission is to provide high-quality, engaging, and effective Spanish language learning resources.
            </p>
            <p className="text-lg text-gray-800 dark:text-gray-200">
            Join us on this beautiful journey of mastering the Spanish language!
            </p>
        </div>
    );
};

export default About;