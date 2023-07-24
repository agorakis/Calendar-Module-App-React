import { AiOutlineCalendar } from "react-icons/ai";
import useEvents, { Event } from "../hooks/useEvents";
import eventDateCalculator from "../utils/eventDateCalculator";
import "./EventList.css";

interface EventListProps {
  onEventClick: (event: Event) => void;
}

const EventList = ({ onEventClick }: EventListProps) => {
  const { data, isLoading, errors } = useEvents();

  if (errors) return <p>{errors}</p>;

  return (
    <div className="container">
      <div className="header">
        <AiOutlineCalendar color="black" size={23} />
        <h2>Upcoming Events</h2>
      </div>
      {isLoading && <p className="loader">Loading....</p>}
      {data ? (
        <ul>
          {data.map((event) => (
            <li key={event.ID}>
              {
                <a onClick={() => onEventClick(event)}>
                  {event.Title} - {eventDateCalculator(event.EventStartDate)}
                </a>
              }
            </li>
          ))}
        </ul>
      ) : (
        <p>No events yet</p>
      )}
    </div>
  );
};

export default EventList;
