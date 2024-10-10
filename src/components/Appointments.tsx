import { generateClient } from "aws-amplify/api";
import React, { useEffect, useState } from "react";
import { Schema } from "../../amplify/data/resource";

const client = generateClient<Schema>();

const Appointments: React.FC = () => {

  const [appointments, setAppointments] = useState<Schema['Appointment'][]>([]);


  const times = [
    "8:00am",
    "9:00am",
    "10:00am",
    "2:00pm",
    "3:00pm",
    "4:00pm",
    "5:00pm",
  ];


  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data: appointments } = await client.models.Appointment.list();
        setAppointments(appointments);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

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

  const getAppointment = (date: string, time: string) => {
    return appointments.find(
      (appointment) => appointment.date === date && appointment.time === time
    );
  };

  const days = getWeekDays(currentWeek);
  return (
    <div className="p-6 text-gray-200 bg-gray-900">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold mb-4">Appointments</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <div>
            <div className="flex justify-between mb-4">
              <button
                onClick={handlePrevWeek}
                className="px-4 py-2 bg-gray-700 text-white hover:bg-gray-600"
              >
                Previous Week
              </button>
              <button
                onClick={handleToday}
                className="px-4 py-2 bg-gray-700 text-white hover:bg-gray-600"
              >
                Today
              </button>
              <button
                onClick={handleNextWeek}
                className="px-4 py-2 bg-gray-700 text-white hover:bg-gray-600"
              >
                Next Week
              </button>
            </div>
            <div className="overflow-x-auto flex">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-800">
                  <tr>
                    {days.map((day) => (
                      <th
                        key={day.date}
                        className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                          isToday(day.fullDate)
                            ? "bg-blue-500 text-white"
                            : "text-gray-300"
                        }`}
                      >
                        {day.day} {day.date} {day.month}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-gray-800 divide-y divide-gray-700">
                  {times.map((time) => (
                    <tr key={time}>
                      {days.map((day) => {
                        const appointment = getAppointment(day.isoDate, time);
                        return (
                          <td
                            key={day.date}
                            className={`px-6 py-4 whitespace-nowrap cursor-pointer ${
                              selectedDate === day.isoDate &&
                              selectedTime === time
                                ? "bg-blue-500 text-white"
                                : "text-gray-300"
                            } hover:bg-gray-700`}
                            onClick={() =>
                              handleTimeSlotClick(day.isoDate, time)
                            }
                          >
                            <div className="text-sm font-medium">
                              {time}
                              {appointment && (
                                <div className="mt-1 text-xs">
                                  <div>{appointment.name}</div>
                                  <div>{appointment.email}</div>
                                </div>
                              )}
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mb-6">
            <ul className="space-y-4">
              {appointments.map((appointment, index) => (
                <li
                  key={index}
                  className="p-4 bg-gray-800 rounded-lg shadow-md flex justify-between items-center hover:bg-gray-700"
                >
                  <div>
                    <div className="text-lg font-bold">{appointment.name}</div>
                    <div className="text-sm text-gray-400">
                      {appointment.email}
                    </div>
                    <div className="text-sm text-gray-400">
                      {new Date(appointment.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}{" "}
                      at {appointment.time}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
