import { useNavigate } from "react-router-dom";
import cal from "../../../assets/cal.png";
import time from "../../../assets/time.png";
import location from "../../../assets/location-icon.svg";
import cost from "../../../assets/cost.png";
import PropTypes from "prop-types";

const splitDateTime = (dateTimeStr) => {
  const regex = /^(\d{4}-\d{2}-\d{2})-(\d{1,2}:\d{2})(am|pm)$/i;
  const match = dateTimeStr.match(regex);
  if (!match) throw new Error("Invalid date format");
  const [, date, time, ampm] = match;
  let [h, m] = time.split(":").map(Number);
  if (ampm.toLowerCase() === "pm" && h !== 12) h += 12;
  if (ampm.toLowerCase() === "am" && h === 12) h = 0;
  return { date, time: `${String(h).padStart(2, "0")}:${m}` };
};

const EventCard = ({ event }) => {
  const navigate = useNavigate();
  const start = splitDateTime(event.startDateAndTime);
  const end = splitDateTime(event.endDateAndTime);

  return (
    <div className="bg-white shadow-md hover:shadow-lg transition rounded-lg overflow-hidden flex flex-col">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-[250px] object-cover"
      />
      <div className="p-6 flex-grow">
        <h3 className="text-lg font-semibold text-black mb-2 text-center">
          {event.title}
        </h3>
        <p className="text-sm text-gray-600 text-center mb-4">
          {event.description}
        </p>
        <div className="text-sm space-y-2">
          <div className="flex items-center gap-2">
            <img src={cal} className="w-4 h-4" alt="Calendar" />
            <span>{start.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={time} className="w-4 h-4" alt="Time" />
            <span>
              {start.time} – {end.time}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img src={location} className="w-4 h-4" alt="Location" />
            <span>{event.venue}</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={cost} className="w-4 h-4" alt="Cost" />
            <span>Free</span>
          </div>
        </div>
      </div>
      <div className="p-4 text-right">
        <button
          onClick={() =>
            navigate(`/event/${encodeURIComponent(event.title)}`, {
              state: { event },
            })
          }
          className="bg-[#194b88] text-white px-4 py-2 rounded-full text-sm hover:bg-[#123a6b]"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default EventCard;
EventCard.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    startDateAndTime: PropTypes.string.isRequired,
    endDateAndTime: PropTypes.string.isRequired,
    venue: PropTypes.string.isRequired,
  }).isRequired,
};
