import EventCard from "./event-card";
import PropTypes from "prop-types";

const EventGrid = ({ events }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
    {events.map((event) => (
      <EventCard key={event.title} event={event} />
    ))}
  </div>
);

export default EventGrid;
EventGrid.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      startDateAndTime: PropTypes.string.isRequired,
      endDateAndTime: PropTypes.string.isRequired,
      venue: PropTypes.string.isRequired,
    })
  ).isRequired,
};
