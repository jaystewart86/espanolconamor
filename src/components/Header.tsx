import React, { useState, useEffect } from "react";
import { signOut, getCurrentUser } from 'aws-amplify/auth';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuthState();
  }, []);

  async function checkAuthState() {
    try {
      await getCurrentUser();
      setIsAuthenticated(true);
    } catch {
      setIsAuthenticated(false);
    }
  }

  async function handleSignOut() {
    try {
      await signOut();
      setIsAuthenticated(false);
      navigate('/');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  }

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
            <img src="/logo.png" alt="Logo" className="h-12" />
          </Link>
          <nav>
            <ul className="flex space-x-6">
              {[
                { href: "/", text: "Home" },
                { href: "/about", text: "About" },
                { href: "/blog", text: "Blog" },
                { href: "/contact", text: "Contact" },
                { href: "/terms-and-conditions", text: "Terms" },
                { href: "/booking", text: "Book" },
                { href: "/availability", text: "Availability" },
                { href: "/appointments", text: "Appointments" },
                { href: "/clients", text: "Clients" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <button
                onClick={handleSignOut}
                className="px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-200 dark:bg-gray-700 dark:text-blue-400 dark:hover:bg-gray-600"
              >
                Sign Out
              </button>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
