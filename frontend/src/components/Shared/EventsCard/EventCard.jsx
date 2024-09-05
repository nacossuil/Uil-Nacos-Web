/* eslint-disable react/prop-types */
import "./event-card.css";
import {
  IoCalendarOutline,
  IoTimeOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";

const EventCard = ({ data }) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const {
    image,
    venue,
    description,
    title,
    onclick,
    startDateAndTime,
    endDateAndTime,
  } = data;

  const [startYear, startMonth, startDay, startTime] =
    startDateAndTime?.split("-");
  const [endYear, endMonth, endDay, endTime] = endDateAndTime?.split("-");
  const dateRange = `${startDay} ${
    months[Number(startMonth)]
  }, ${startYear} - ${endDay} ${months[Number(endMonth)]}, ${endYear}`;
  const timeRange = `${startTime} - ${endTime}`;
  return (
    <div className="events-card">
      <img src={image} alt="" />
      <div className="events-content">
        <div className="events-text">
          <p className="card-head">{title}</p>
          <p className="card-desc">{description}</p>
        </div>
        <div className="events-cal">
          <div className="events-dtv">
            <div className="events-date">
              <IoCalendarOutline />
              <p>{dateRange}</p>
            </div>
            <div className="events-date">
              <IoTimeOutline />
              <p>{timeRange}</p>
            </div>
            <div className="events-date">
              <IoLocationOutline />
              <p>{venue}</p>
            </div>
          </div>

          <button>
            {/* <Link to={`${onclick}`}>RSVP</Link> */}
            <Link to={`${onclick}`}>Catch Up!</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
