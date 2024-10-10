import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-blue-600 text-white shadow-md">
      <div className="flex items-center">
        <a href="#home" className="logo">
          <img src="/logo.png" alt="Logo" className="h-12" />
        </a>
        <nav className="ml-10 space-x-6">
          <a href="#home" className="text-lg font-semibold hover:text-gray-300">Home</a>
          <a href="#features" className="text-lg font-semibold hover:text-gray-300">Features</a>
          <a href="#about" className="text-lg font-semibold hover:text-gray-300">About</a>
          <a href="#contact" className="text-lg font-semibold hover:text-gray-300">Contact</a>
          <a href="/booking" className="text-lg font-semibold hover:text-gray-300">Book a Lesson</a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#signin" className="text-lg font-semibold hover:text-gray-300">Sign In</a>
        <a href="#signup" className="px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-200">Sign Up</a>
      </div>
    </header>
  );
};

export default Header;