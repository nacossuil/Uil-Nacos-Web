import PropTypes from "prop-types";
import EventCards from "../../../components/EventCards/EventCards";

const Events = ({ eventsData, heading }) => {
  return (
    <section className="section-courses">
      <div className="container-center">
        <p className="heading-desc">Test your skills</p>
        <h1 className="heading-md">{heading}</h1>
        <EventCards eventsData={eventsData} />
      </div>
    </section>
  );
};

Events.propTypes = {
  eventsData: PropTypes.array,
  heading: PropTypes.string,
};

export default Events;
