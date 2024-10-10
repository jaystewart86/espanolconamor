import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-gray-900">
            <img src="/logo.png" alt="Logo" className="h-12" />
          </a>
          <nav>
            <ul className="flex space-x-6">
              <a href="/" className="text-gray-500 hover:text-gray-900">
                Home
              </a>
              <li>
                <a href="/blog" className="text-gray-500 hover:text-gray-900">
                  Blog
                </a>
              </li>
              <a href="/about" className="text-gray-500 hover:text-gray-900">
                About
              </a>
              <a href="/contact" className="text-gray-500 hover:text-gray-900">
                Contact
              </a>
              <a
                href="/terms-and-conditions"
                className="text-gray-500 hover:text-gray-900"
              >
                Terms
              </a>
              <a href="/support" className="text-gray-500 hover:text-gray-900">
                Support
              </a>
              <a href="/availability" className="text-gray-500 hover:text-gray-900">
                Availability
              </a>
              <a href="/booking" className="text-gray-500 hover:text-gray-900">
                Book
              </a>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <a
              href="#signin"
              className="text-lg font-semibold hover:text-gray-300"
            >
              Sign In
            </a>
            <a
              href="#signup"
              className="px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-200"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
