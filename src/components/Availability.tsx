import React, { useEffect, useState } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

const Availability: React.FC = () => {
    const [availability, setAvailability] = useState(
        daysOfWeek.reduce((acc, day) => {
            acc[day] = { start: "", end: "", start2: "", end2: "" };
            return acc;
        }, {} as Record<string, { start: string; end: string; start2: string; end2: string }>)
    );

    console.log(availability);

    const handleChange = (
        day: string,
        field: "start" | "end" | "start2" | "end2",
        value: string
    ) => {
        if (availability[day]) {
            setAvailability({
                ...availability,
                [day]: {
                    ...availability[day],
                    [field]: value,
                },
            });
        }
    };

    const fetchAvailability = async () => {
        try {
            const { data: items } = await client.models.Config.list();
            if (items) {
                const fetchedAvailability = items.reduce((acc: Record<string, { start: string; end: string; start2: string; end2: string }>, item: any) => {
                    if (daysOfWeek.includes(item.id)) {
                        const value = JSON.parse(item.value);
                        acc[item.id] = {
                            start: value.start,
                            end: value.end,
                            start2: value.start2,
                            end2: value.end2,
                        };
                    }
                    return acc;
                }, {});

                // Only update availability if there is a day of week in config
                if (Object.keys(fetchedAvailability).length > 0) {
                    setAvailability(fetchedAvailability);
                }
            }
        } catch (error) {
            console.error("An error occurred while fetching availability:", error);
        }
    };

    useEffect(() => {
        fetchAvailability();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (
                typeof client !== "undefined" &&
                client.models &&
                client.models.Config
            ) {
                const formattedAvailability = Object.keys(availability).map((day) => ({
                    id: day,
                    value: JSON.stringify({
                        start: availability[day].start,
                        end: availability[day].end,
                        start2: availability[day].start2,
                        end2: availability[day].end2,
                    }),
                }));

                for (const entry of formattedAvailability) {
                    try {
                        const existing = await client.models.Config.get({ id: entry.id });
                        if (existing) {
                            const updated = await client.models.Config.update({
                                id: entry.id,
                                value: entry.value,
                            });
                            console.log(`Updated entry: ${updated}`);
                        } else {
                            const created = await client.models.Config.create(entry);
                            console.log(`Created entry: ${created}`);
                        }
                    } catch (error) {
                        console.error(`An error occurred while processing ${entry.id}:`, error);
                    }
                }
            } else {
                console.error("Client is not defined or improperly configured.");
            }
        } catch (error) {
            console.error("An error occurred while submitting availability:", error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Set Availability
            </h1>
            <form
                onSubmit={handleSubmit}
                className="p-6 bg-white shadow-md rounded-lg"
            >
                {daysOfWeek.map((day) => (
                    <div key={day} className="mb-6">
                        <label className="block text-gray-800 font-semibold mb-2">
                            {day}
                        </label>
                        <div className="flex space-x-4 mb-4">
                            <select
                                value={availability[day].start}
                                onChange={(e) => handleChange(day, "start", e.target.value)}
                                className="border border-gray-300 rounded-lg p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="" disabled>
                                    Select start time
                                </option>
                                {Array.from({ length: 13 }, (_, i) => (
                                    <option key={i} value={`${6 + i}:00`}>
                                        {`${6 + i}:00`}
                                    </option>
                                ))}
                            </select>
                            <select
                                value={availability[day].end}
                                onChange={(e) => handleChange(day, "end", e.target.value)}
                                className="border border-gray-300 rounded-lg p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="" disabled>
                                    Select end time
                                </option>
                                {Array.from({ length: 13 }, (_, i) => (
                                    <option key={i} value={`${6 + i}:00`}>
                                        {`${6 + i}:00`}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex space-x-4">
                            <select
                                value={availability[day].start2}
                                onChange={(e) => handleChange(day, "start2", e.target.value)}
                                className="border border-gray-300 rounded-lg p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="" disabled>
                                    Select second start time
                                </option>
                                {Array.from({ length: 13 }, (_, i) => (
                                    <option key={i} value={`${6 + i}:00`}>
                                        {`${6 + i}:00`}
                                    </option>
                                ))}
                            </select>
                            <select
                                value={availability[day].end2}
                                onChange={(e) => handleChange(day, "end2", e.target.value)}
                                className="border border-gray-300 rounded-lg p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="" disabled>
                                    Select second end time
                                </option>
                                {Array.from({ length: 13 }, (_, i) => (
                                    <option key={i} value={`${6 + i}:00`}>
                                        {`${6 + i}:00`}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                ))}
                <button
                    type="submit"
                    className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Availability;
