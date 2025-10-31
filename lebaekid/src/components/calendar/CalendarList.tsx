import axios from "axios";
import { useEffect, useState } from "react";
import DateFormatter from "../dateFormatter/DateFormatter";

interface CalendarEvent {
  id: number;
  name: string;
  location: string;
  bike_type: string;
  date: string;
  link: string;
  distance: number;
  status: boolean;
}

const CalendarList = () => {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "https://lebaek.id/backend/fetch_users.php"
          // "/localhost/backend/fetch_users.php"
        );
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchEvents();
  }, []);
  const confirmedEvents = events.filter((event) => event.status == true);
return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* Events */}
        {confirmedEvents.map((event) => (
          <div
            key={event.id}
            className="py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-4 sm:gap-8"
          >
            <p className="text-lg sm:text-xl font-normal text-gray-500 sm:text-right">
              <DateFormatter dateString={event.date} />
            </p>
            <div className="text-base sm:text-lg text-gray-900">
              <a href={event.link} className="font-semibold hover:underline block mb-2">
                {event.name}
              </a>
              <p className="text-gray-900">
                {event.distance}km · {event.location}
              </p>
              <p className="text-gray-900">{event.bike_type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarList;
