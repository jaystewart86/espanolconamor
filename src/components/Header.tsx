import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-gray-900 dark:text-white">
        <img src="/logo.png" alt="Logo" className="h-12" />
        </a>
        <nav>
        <ul className="flex space-x-6">
          <a href="/" className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
          Home
          </a>
          <a href="/about" className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
          About
          </a>
          <li>
          <a href="/blog" className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            Blog
          </a>
          </li>
          <a href="/booking" className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
          Book
          </a>
          <a href="/contact" className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
          Contact
          </a>
          <a href="/terms-and-conditions" className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
          Terms
          </a>
          <a href="/availability" className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
          Availability
          </a>
          <a href="/appointments" className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
          Appointments
          </a>
        </ul>
        </nav>
        <div className="flex items-center space-x-4">
        <a href="#signin" className="text-lg font-semibold hover:text-gray-300 dark:text-white dark:hover:text-gray-400">
          Sign In
        </a>
        <a href="#signup" className="px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-200 dark:bg-gray-700 dark:text-blue-400 dark:hover:bg-gray-600">
          Sign Up
        </a>
        </div>
      </div>
      </div>
    </header>
  );
};

export default Header;
