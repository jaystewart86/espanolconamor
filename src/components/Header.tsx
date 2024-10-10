import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-6 bg-blue-500 text-white shadow-lg">
      <nav className="flex items-center">
        <a href="#home" className="logo"><img src="/logo.png" alt="Logo" className="h-16" /></a>
        <a href="#features" className="ml-8 text-lg font-semibold hover:text-gray-300">Features</a>
        <a href="#contact" className="ml-8 text-lg font-semibold hover:text-gray-300">Contact</a>
      </nav>
    </header>
  );
};

export default Header;