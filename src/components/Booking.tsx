import React from 'react';

const Booking: React.FC = () => {
  return (
    <div className="p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Book a Spanish Lesson</h1>
      <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
          <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
          <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-lg font-semibold mb-2">Preferred Date</label>
          <input type="date" id="date" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-lg font-semibold mb-2">Preferred Time</label>
          <input type="time" id="time" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700">Book Now</button>
      </form>
    </div>
  );
};

export default Booking;