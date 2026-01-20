import axios from "axios";
import { useEffect, useState, type SetStateAction } from "react";
import DateFormatter from "../dateFormatter/DateFormatter";

interface CalendarEvent {
  id: number;
  name: string;
  location: string;
  bike_type: string;
  date: string;
  link: string;
  distance: string;
  status: boolean;
}

const CalendarList = () => {
  const BIKE_TYPES = [
    { label: "Road Bike", key: "Road Bike" },
    { label: "Gravel", key: "Gravel" },
    { label: "MtB", key: "MtB" },
    { label: "Folding", key: "Folding" },
  ];

  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [inputSearch, setInputSearch] = useState("");
  const [inputLoc, setInputLoc] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [inputDistance, setInputDistance] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "https://lebaek.id/backend/fetch_users.php"
        );
        setEvents(response.data);
        console.log("events data: ", response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchEvents();
  }, []);

  const confirmedEvents = events.filter((event) => event.status == true);

  function handleNameSearch(e: { target: { value: SetStateAction<string> } }) {
    setInputSearch(e.target.value);
  }
  function handleLocSearch(e: { target: { value: SetStateAction<string> } }) {
    setInputLoc(e.target.value);
  }
  function handleDistanceSearch(e: {
    target: { value: SetStateAction<string> };
  }) {
    setInputDistance(e.target.value);
  }

  const handleCheckboxChange = (typeKey: string) => {
    setSelectedTypes((prevTypes) => {
      if (prevTypes.includes(typeKey)) {
        return prevTypes.filter((type) => type !== typeKey);
      } else {
        return [...prevTypes, typeKey];
      }
    });
  };

  const filteredEvents = confirmedEvents.filter((event) => {
    const matchesName = event.name
      .toLowerCase()
      .includes(inputSearch.toLowerCase());
    const matchesLocation = event.location
      .toLowerCase()
      .includes(inputLoc.toLowerCase());
    const matchesDistance = event.distance
      .toLowerCase()
      .includes(inputDistance.toLowerCase());
    const selectedFilterIsActive = selectedTypes.length > 0;

    let matchesBikeType = true;

    if (selectedFilterIsActive) {
      matchesBikeType = selectedTypes.includes(event.bike_type);
    }

    return matchesName && matchesLocation && matchesDistance && matchesBikeType;
  });

  useEffect(() => {
    const currentMonthIndex = new Date().getMonth() + 1;
    console.log("curr month: ", currentMonthIndex);

    for (let i = 0; i < confirmedEvents.length; i++) {
      const element = confirmedEvents[i];
      const dateObject = new Date(element.date);
      const monthNumber = dateObject.getMonth() + 1;

      if (monthNumber == currentMonthIndex) {
        document.getElementById(`${confirmedEvents[i].id}`)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
        break;
      }
    }
  }, [events]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <h1 className="font-semibold text-start mb-2 text-lg">Search</h1>
        <input
          type="text"
          placeholder="Name..."
          onChange={handleNameSearch}
          className="w-full font-semibold font-primary px-4 py-2 bg-gray-100 border-gray-700"
        />
        <input
          type="text"
          placeholder="Location..."
          onChange={handleLocSearch}
          className="w-full font-semibold font-primary px-4 py-2 bg-gray-100 border-gray-700"
        />{" "}
        <input
          type="text"
          placeholder="Distance..."
          onChange={handleDistanceSearch}
          className="w-full font-semibold font-primary px-4 py-2 bg-gray-100 border-gray-700"
        />
        <h1 className="font-semibold text-start mt-3">Bike Types</h1>
        {BIKE_TYPES.map((type) => (
          <label className="px-3" key={type.key}>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange(type.key)}
              className="mx-1 my-3"
            />
            <span className="font-semibold">{type.label}</span>
          </label>
        ))}
      </div>
      <div className="divide-y divide-gray-700">
        {/* Events */}
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            id={`${event.id}`}
            className="py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-4 sm:gap-8"
          >
            <a href={`/calendar/#${event.id}`}>
              <p className="text-lg sm:text-xl font-normal text-gray-500 sm:text-right">
                <DateFormatter dateString={event.date} />
              </p>
            </a>
            <div className="text-base sm:text-lg text-gray-900">
              <a
                href={event.link}
                target="_blank"
                className="font-semibold hover:underline block mb-2"
              >
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
