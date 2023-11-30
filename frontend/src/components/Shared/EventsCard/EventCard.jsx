/* eslint-disable react/prop-types */
import './event-card.css'
import { IoCalendarOutline, IoTimeOutline, IoLocationOutline } from 'react-icons/io5'

const EventCard = ({ data }) => {
    const { img, location, date, time, desc, name } = data

    return (
        <div className="events-card">
            <img src={img} alt="" />
            <div className="events-content">
                <div className="events-text">
                    <p className="card-head">{name}</p>
                    <p className="card-desc">{desc}</p>
                </div>
                <div className="events-cal">
                    <div className="events-dtv">
                        <div className="events-date">
                            <IoCalendarOutline />
                            <p>{date}</p>
                        </div>
                        <div className="events-date">
                            <IoTimeOutline />
                            <p>{time}</p>
                        </div>
                        <div className="events-date">
                            <IoLocationOutline />
                            <p>{location}</p>
                        </div>
                    </div>

                    <button>RSVP</button>
                </div>
            </div>
        </div>
    )
}

export default EventCard

