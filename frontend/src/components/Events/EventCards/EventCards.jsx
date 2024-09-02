import PropTypes from "prop-types";
import styles from "./EventCards.module.css";
import locationIcon from "./../../../assets/location-icon.svg";
import timeIcon from "./../../../assets/time-icon.svg";
import dateIcon from "./../../../assets/date-icon.svg";

const EventCards = ({ eventsData }) => {
  return (
    <ul className={styles.cards}>
      {eventsData.map((event, i) => {
        const { img, title, description, venue, time, date } = event;
        return (
          <EventCard
            key={i}
            img={img}
            title={title}
            description={description}
            date={date}
            time={time}
            venue={venue}
          />
        );
      })}
    </ul>
  );
};

EventCards.propTypes = {
  data: PropTypes.array,
  eventsData: PropTypes.array,
};

const EventCard = ({ img, title, description, date, time, venue }) => {
  return (
    <li className={styles.card}>
      <img src={img} alt="event" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          <p>
            <span>
              <img src={dateIcon} alt="icon" />
              {date}
            </span>
            <span>
              <img src={timeIcon} alt="icon" />
              {time}
            </span>
            <span>
              <img src={locationIcon} alt="icon" />
              {venue}
            </span>
          </p>
          <a href="/#">Register</a>
        </div>
      </div>
    </li>
  );
};

EventCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  venue: PropTypes.string,
};

export default EventCards;
