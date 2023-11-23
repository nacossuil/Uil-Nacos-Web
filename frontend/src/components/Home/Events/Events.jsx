import './Events.css'
import EventCard from '../../Shared/EventsCard/EventCard'
import { EVENTS } from './data';

const Events = () => {
    return (
        <section className='Events'>
            <p className='events-head'>Events and Bootcamps</p>
            <div className="events-nav">
                <button className='cp-button active'>Upcoming Events</button>
                <button className='cp-button'>Past Events</button>
            </div>
            <div className="events-card-container">
                {EVENTS.map((data, i) => <EventCard key={data.name + i} data={data} />)}
            </div>
        </section>
    )
}


export default Events;