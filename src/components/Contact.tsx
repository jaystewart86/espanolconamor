import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">Contact Us</h2>
            <form className="space-y-4">
                <div>
                <label className="block text-gray-700 dark:text-gray-300">Name</label>
                <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                    placeholder="Your Name"
                />
                </div>
                <div>
                <label className="block text-gray-700 dark:text-gray-300">Email</label>
                <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                    placeholder="Your Email"
                />
                </div>
                <div>
                <label className="block text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                    placeholder="Your Message"
                    rows={4}
                ></textarea>
                </div>
                <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                Send Message
                </button>
            </form>
            </div>
        </div>
    );
};

export default Contact;