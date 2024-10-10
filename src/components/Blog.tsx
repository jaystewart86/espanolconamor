import React from 'react';

const Blog: React.FC = () => {
    const posts = [
        {
            title: 'First Blog Post',
            description: 'This is the description for the first blog post.',
            date: 'October 1, 2023',
        },
        {
            title: 'Second Blog Post',
            description: 'This is the description for the second blog post.',
            date: 'October 2, 2023',
        },
        // Add more posts as needed
    ];

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10">
            <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-gray-100">Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">{post.title}</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{post.description}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{post.date}</p>
                </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default Blog;