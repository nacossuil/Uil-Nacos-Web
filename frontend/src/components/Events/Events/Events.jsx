import axios from "axios";
import "./Events.css";
import EventCard from "../../Shared/EventsCard/EventCard";
import { useEffect, useState } from "react";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [eventsLoading, setEventsLoading] = useState(false);
  useEffect(() => {
    const fetchEvents = async () => {
      setEventsLoading(true);
      try {
        const res = await axios.get(
          "https://uil-nacos-web.onrender.com/api/events"
        );
        const eventData = res.data;
        console.log(res.data);

        setEvents(eventData);
        setEventsLoading(false);
      } catch (error) {
        console.error("Fetching events failed", error);
      }
    };
    fetchEvents();
  }, []);
  return (
    <section className="Events">
      <div className="events-container">
        <p className="events-head">Events and Bootcamps</p>
        <div className="events-nav">
          <button className="cp-button">Upcoming Events</button>
          <button className="cp-button active">Past Events</button>
        </div>
        <div className="events-card-container">
          {eventsLoading
            ? null
            : events.map((data, i) => <EventCard key={i} data={data} />)}
        </div>
      </div>
    </section>
  );
};

export default Events;
