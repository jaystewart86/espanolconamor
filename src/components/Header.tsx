import React from "react";

interface HeaderProps {
  signOut: ((data?: AuthEventData | undefined) => void) | undefined; // Specify the signOut function type
  user?: AuthUser;
}

const Header: React.FC<HeaderProps> = ({ signOut, user }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a
            href="/"
            className="text-xl font-bold text-gray-900 dark:text-white"
          >
            <img src="/logo.png" alt="Logo" className="h-12" />
          </a>
          <nav>
            <ul className="flex space-x-6">
              <a
                href="/"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                About
              </a>
              <a
                href="/blog"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Blog
              </a>

              <a
                href="/contact"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Contact
              </a>
              <a
                href="/terms-and-conditions"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Terms
              </a>
              <a
                href="/booking"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Book
              </a>
              <a
                href="/availability"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Availability
              </a>
              <a
                href="/appointments"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Appointments
              </a>
              <a
                href="/clients"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Clients
              </a>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
          {user && (
            <p className="text-gray-600 dark:text-gray-400 mr-4 inline-block">
              {user.signInDetails?.loginId || user.username}
            </p>
          )}
            <a
              href="/sign-out"
              className="px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-200 dark:bg-gray-700 dark:text-blue-400 dark:hover:bg-gray-600"
            >
              Sign Out
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
