import './Events.css'
import Event1Img from '../../../assets/imgs/event2.webp'
import Event2Img from '../../../assets/imgs/event1.webp'
import time from '../../../assets/time-icon.svg'
import location from '../../../assets/location-icon.svg'
import date from '../../../assets/date-icon.svg'

const Events = () => {
    return(
        <section className='Events'>
            <p className='events-head'>Events and Bootcamps</p>
            <div className="cp">
                <button className='cp-button active'>Upcoming Events</button>
                <button className='cp-button'>Past Events</button>
            </div>
            <div className="events-card-container">
                <div className="events-card">
                    <img src = {Event1Img} alt="" />
                    <div className="events-content">
                        <div className="events-text">
                            <p className="card-head">National Innovation Summit</p>
                            <p className="card-desc">Is to become a network of committed Student IT Professionals</p>
                        </div>
                        <div className="events-cal">
                            <div className="events-dtv">
                                <div className="events-date">
                                    <img src={date} alt="" />
                                    <p>12 Sep, 2023 - 28 Sep, 2023</p>
                                </div>
                                <div className="events-date">
                                    <img src={time} alt="" />
                                    <p>12 PM - 2:30 PM</p>
                                </div>
                                <div className="events-date">
                                    <img src={location} alt="" />
                                    <p>CISLT</p>
                                </div>
                            </div>

                            <button>RSVP</button>
                        </div>
                    </div>
                </div>
                <div className="events-card">
                <img src = {Event2Img} alt="" />
                    <div className="events-content">
                        <div className="events-text">
                            <p className="card-head">National Innovation Summit</p>
                            <p className="card-desc">Is to become a network of committed Student IT Professionals</p>
                        </div>
                        <div className="events-cal">
                            <div className="events-dtv">
                                <div className="events-date">
                                    <img src={date} alt="" />
                                    <p>12 Sep, 2023 - 28 Sep, 2023</p>
                                </div>
                                <div className="events-date">
                                    <img src={time} alt="" />
                                    <p>12 PM - 2:30 PM</p>
                                </div>
                                <div className="events-date">
                                    <img src={location} alt="" />
                                    <p>CISLT</p>
                                </div>
                            </div>

                            <button>RSVP</button>
                        </div>
                    </div>
                </div>
                <div className="events-card">
                <img src = {Event1Img} alt="" />
                    <div className="events-content">
                        <div className="events-text">
                            <p className="card-head">National Innovation Summit</p>
                            <p className="card-desc">Is to become a network of committed Student IT Professionals</p>
                        </div>
                        <div className="events-cal">
                            <div className="events-dtv">
                                <div className="events-date">
                                    <img src={date} alt="" />
                                    <p>12 Sep, 2023 - 28 Sep, 2023</p>
                                </div>
                                <div className="events-date">
                                    <img src={time} alt="" />
                                    <p>12 PM - 2:30 PM</p>
                                </div>
                                <div className="events-date">
                                    <img src={location} alt="" />
                                    <p>CISLT</p>
                                </div>
                            </div>

                            <button>RSVP</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Events;