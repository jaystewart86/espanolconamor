import React, { useState } from "react";

const Booking: React.FC = () => {
  const times = ["8:00am", "9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm"];

  const [currentWeek, setCurrentWeek] = useState(0);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const getWeekDays = (weekOffset: number) => {
    const today = new Date();
    const startOfWeek = new Date(
      today.setDate(today.getDate() - today.getDay() + 1 + weekOffset * 7)
    ); // Adjust the start of the week based on the week offset
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      const dayOfWeek = date.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        // Exclude Sunday (0) and Saturday (6)
        days.push({
          day: date.toLocaleDateString("en-US", { weekday: "short" }),
          date: date.getDate().toString().padStart(2, "0"),
          month: date.toLocaleDateString("en-US", { month: "short" }),
          fullDate: date.toDateString(),
          isoDate: date.toISOString().split("T")[0], // ISO format date for form input
        });
      }
    }
    return days;
  };

  const isToday = (dateString: string) => {
    const today = new Date().toDateString();
    return today === dateString;
  };

  const handlePrevWeek = () => {
    setCurrentWeek(currentWeek - 1);
  };

  const handleNextWeek = () => {
    setCurrentWeek(currentWeek + 1);
  };

  const handleToday = () => {
    setCurrentWeek(0);
  };

  const handleTimeSlotClick = (date: string, time: string) => {
    setSelectedDate(date);
    const match = time.match(/(\d+):(\d+)([ap]m)/i);
    if (match) {
      const [hour, minute, period] = match.slice(1);
      let hour24 = parseInt(hour, 10);
      if (period.toLowerCase() === "pm" && hour24 !== 12) {
        hour24 += 12;
      } else if (period.toLowerCase() === "am" && hour24 === 12) {
        hour24 = 0;
      }
      const time24 = `${hour24.toString().padStart(2, "0")}:${minute}`;
      setSelectedTime(time24);
    }
  };

  const days = getWeekDays(currentWeek);
  return (
    <div className="p-6 text-gray-200 bg-gray-900">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold mb-4">Book a Spanish Lesson</h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <div>
            <div className="flex justify-between mb-4">
              <button
                onClick={handlePrevWeek}
                className="px-4 py-2 bg-gray-700 text-white dark:bg-gray-600 dark:text-gray-200"
              >
                Previous Week
              </button>
              <button
                onClick={handleToday}
                className="px-4 py-2 bg-gray-700 text-white dark:bg-gray-600 dark:text-gray-200"
              >
                Today
              </button>
              <button
                onClick={handleNextWeek}
                className="px-4 py-2 bg-gray-700 text-white dark:bg-gray-600 dark:text-gray-200"
              >
                Next Week
              </button>
            </div>
            <div className="overflow-x-auto flex">
              <table className="min-w-full divide-y divide-gray-700 dark:divide-gray-600">
                <thead className="bg-gray-800 dark:bg-gray-700">
                  <tr>
                    {days.map((day) => (
                      <th
                        key={day.date}
                        className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                          isToday(day.fullDate)
                            ? "bg-blue-500 text-white"
                            : "text-gray-300 dark:text-gray-400"
                        }`}
                      >
                        {day.day} {day.date} {day.month}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-gray-800 dark:bg-gray-700 divide-y divide-gray-700 dark:divide-gray-600">
                  {times.map((time) => (
                    <tr key={time}>
                      {days.map((day) => (
                        <td
                          key={day.date}
                          className={`px-6 py-4 whitespace-nowrap cursor-pointer ${
                            selectedDate === day.isoDate &&
                            selectedTime === time
                              ? "bg-blue-500 text-white"
                              : "text-gray-300 dark:text-gray-400"
                          }`}
                          onClick={() => handleTimeSlotClick(day.isoDate, time)}
                        >
                          <div className="text-sm font-medium">{time}</div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <form className="bg-gray-800 dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label
                htmlFor="whatsapp"
                className="block text-lg font-semibold mb-2 text-gray-300 dark:text-gray-400"
              >
                WhatsApp Number
              </label>
              <input
                type="tel"
                id="whatsapp"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-700 dark:bg-gray-600 text-gray-300 dark:text-gray-400"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-lg font-semibold mb-2 text-gray-300 dark:text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-700 dark:bg-gray-600 text-gray-300 dark:text-gray-400"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-lg font-semibold mb-2 text-gray-300 dark:text-gray-400"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-700 dark:bg-gray-600 text-gray-300 dark:text-gray-400"
              />
            </div>
            <div className="mb-4 flex gap-4">
              <div className="flex-1">
                <label
                  htmlFor="date"
                  className="block text-lg font-semibold mb-2 text-gray-300 dark:text-gray-400"
                >
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-700 dark:bg-gray-600 text-gray-300 dark:text-gray-400"
                  disabled
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="time"
                  className="block text-lg font-semibold mb-2 text-gray-300 dark:text-gray-400"
                >
                  Preferred Time
                </label>
                <input
                  type="time"
                  id="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-700 dark:bg-gray-600 text-gray-300 dark:text-gray-400"
                  disabled
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
