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
    <div className="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
      {/* Events */}
      {confirmedEvents.map((event) => (
        <div
          key={event.id}
          className="grid grid-cols-3 gap-20 py-4 sm:gap-2 sm:flex-row sm:items-left text-start"
        >
          <p className="w-32 text-xl font-normal text-gray-500 sm:text-right shrink-0">
            <DateFormatter dateString={event.date} />
          </p>
          <h3 className="text-xl sm:text-sm md:text-lg text-gray-900 col-span-2">
            <a href={event.link} className="font-semibold hover:underline">
              {event.name}
            </a>
            <p>
              {event.distance}km {event.location}
            </p>
            <p>{event.bike_type}</p>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default CalendarList;
