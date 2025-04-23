import { useLocation, useNavigate } from 'react-router-dom';
import time from "../../../assets/time.png";
import location from "../../../assets/location-icon.svg";
import cal from "../../../assets/cal.png";
import cost from "../../../assets/cost.png";
import grid from "../../../assets/Grid.png";
import { FaArrowLeft, FaArrowRightToBracket } from 'react-icons/fa6';

const EventDetail = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const event = state?.event;

    if (!event) {
        return <div>Event not found.</div>;
    }

    const splitDateTime = (dateTimeStr) => {
        const regex = /^(\d{4}-\d{2}-\d{2})-(\d{1,2}:\d{2})(am|pm)$/i;
        const match = dateTimeStr.match(regex);

        if (!match) {
            return { date: 'Invalid Date', time: 'Invalid Time' };
        }

        const [, date, time, ampm] = match;

        let [hours, minutes] = time.split(':');
        hours = parseInt(hours);

        if (ampm.toLowerCase() === 'pm' && hours !== 12) {
            hours += 12;
        } else if (ampm.toLowerCase() === 'am' && hours === 12) {
            hours = 0;
        }

        hours = hours.toString().padStart(2, '0');

        return {
            date,
            time: `${hours}:${minutes}`
        };
    };

    const startDateTime = splitDateTime(event.startDateAndTime);
    const endDateTime = splitDateTime(event.endDateAndTime);

    const handleBackClick = () => {
        navigate('/events');
    };

    const handleCatchUpClick = () => {
        window.open(event.onclick, '_blank');
    };

    return (
        <section
            id="event-detail"
            className="relative min-h-screen w-full flex flex-col justify-center items-center pt-4 px-4 sm:px-8 md:px-16"
            style={{
                backgroundImage: `url(${grid})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}
        >
            <div className="my-12 container mx-auto">
                <button
                    className="mb-6 bg-[#194b88] hover:bg-[#123a6b] text-white text-[14px] py-2 px-4 rounded-[30px]"
                    onClick={handleBackClick}
                >
                <FaArrowLeft size={25} />
                </button>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/2">
                        <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-[400px] object-cover rounded-md"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="lg:w-1/2 flex flex-col justify-between">
                        <div>
                            <h1 className="text-3xl font-semibold mb-4">{event.title}</h1>
                            <p className="text-[16px] mb-6">{event.description}</p>
                            <div className="mb-6">
                                <span className="flex items-center mb-2">
                                    <img src={cal} className="w-[16px] h-[16px]" alt="Calendar" />
                                    <p className="text-[14px] ml-2">{startDateTime.date}</p>
                                </span>
                                <span className="flex items-center mb-2">
                                    <img src={time} className="w-[16px] h-[16px]" alt="Time" />
                                    <p className="text-[14px] ml-2">
                                        {startDateTime.time} - {endDateTime.time}
                                    </p>
                                </span>
                                <span className="flex items-center mb-2">
                                    <img src={location} className="w-[16px] h-[16px]" alt="Location" />
                                    <p className="text-[14px] ml-2">{event.venue}</p>
                                </span>
                                <span className="flex items-center mb-2">
                                    <img src={cost} className="w-[16px] h-[16px]" alt="Cost" />
                                    <p className="text-[14px] ml-2">Free</p>
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button
                                className="bg-[#194b88] hover:bg-[#123a6b] text-white text-[14px] py-2 px-6 rounded-[30px]"
                                onClick={handleCatchUpClick}
                            >
                                Catch Up!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventDetail;