import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import time from "../../../assets/time.png";
import location from "../../../assets/location-icon.svg";
import cal from "../../../assets/cal.png";
import cost from "../../../assets/cost.png";
import grid from "../../../assets/Grid.png";

const Events = () => {
    const [eventInfo, setEventInfo] = useState([]);
    const [activeTab, setActiveTab] = useState('past');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const navigate = useNavigate();

    useEffect(() => {
        fetchEvents();
    }, [activeTab]);

    const fetchEvents = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${baseUrl}/api/events?session=2022-2023`);
            if (!response.ok) {
                throw new Error('Failed to fetch events');
            }
            const data = await response.json();
            setEventInfo(data);
        } catch (error) {
            console.error('Error fetching events:', error);
            setError('Failed to load events. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const getImageSource = (imageUrl) => {
        return imageUrl;
    };

    const splitDateTime = (dateTimeStr) => {
        const regex = /^(\d{4}-\d{2}-\d{2})-(\d{1,2}:\d{2})(am|pm)$/i;
        const match = dateTimeStr.match(regex);

        if (!match) {
            throw new Error("Invalid date-time format. Expected: YYYY-MM-DD-H:MMam/pm");
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

    if (loading) {
        return  <div className="flex flex-col items-center justify-center min-h-[40vh]">
        {/* Spinner */}
        <div className="flex space-x-2 animate-pulse">
          <span className="w-4 h-4 bg-blue-600 rounded-full animate-bounce delay-0" />
          <span className="w-4 h-4 bg-blue-600 rounded-full animate-bounce delay-0" />
          <span className="w-4 h-4 bg-blue-600 rounded-full animate-bounce delay-0" />
        </div>
        {/* Text */}
        <p className="mt-4 text-lg font-semibold text-[#194b88] animate-pulse">
          Loading executives data...
        </p>
      </div>
        ;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <section
            id="hero"
            className="relative min-h-screen w-full flex flex-col justify-center items-center pt-4 px-4 sm:px-8 md:px-16"
            style={{
                backgroundImage: `url(${grid})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}
        >
            <div className="my-12 container mx-auto" id="events">
                <h2 className="text-4xl font-semibold mb-4 text-center">
                    Discover upcoming tech innovation gatherings and hands-on learning experiences
                </h2>

                <div className="flex flex-col flex-wrap justify-center items-center">
                    <div className="flex w-[22rem] bg-[#E1E1E1] rounded-[10px] event-btn">
                        <button
                            className={`w-full py-2 px-4 rounded-l-lg focus:outline-none bg-gray-300 cursor-not-allowed`}
                        >
                            Upcoming events
                        </button>
                        <button
                            className={`p-4 w-full rounded-[10px] bg-[#194b88] shadow-md text-white`}
                            onClick={() => setActiveTab('past')}
                        >
                            Past events
                        </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-16">
                        {eventInfo.map((info) => {
                            const startDateTime = splitDateTime(info.startDateAndTime);
                            const endDateTime = splitDateTime(info.endDateAndTime);

                            const handleReadMoreClick = () => {
                                navigate(`/event/${encodeURIComponent(info.title)}`, { state: { event: info } });
                            };

                            return (
                                <div
                                    key={info.title}
                                    className="flex flex-col w-full sm:w-[300px] mx-6 shadow-lg bg-white rounded-md hover:shadow-xl transition-shadow"
                                >
                                    <img
                                        src={getImageSource(info.image)}
                                        alt={info.title}
                                        className="w-full h-[250px] object-cover rounded-t-md"
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div className="px-6 py-6 flex-grow">
                                        <p className="font-semibold my-2 event-txt">{info.title}</p>
shear: <p className="text-[14px] sub-text">{info.description}</p>
                                    </div>
                                    <div className="flex flex-col justify-between px-6 py-4">
                                        <div className="mb-4">
                                            <span className="flex items-center mb-2">
                                                <img src={cal} className="w-[14px] h-[14px]" alt="Calendar" />
                                                <p className="text-[12px] sub-text ml-2">{startDateTime.date}</p>
                                            </span>
                                            <span className="flex items-center mb-2">
                                                <img src={time} className="w-[14px] h-[14px]" alt="Time" />
                                                <p className="text-[12px] sub-text ml-2">
                                                    {startDateTime.time} - {endDateTime.time}
                                                </p>
                                            </span>
                                            <span className="flex items-center mb-2">
                                                <img src={location} className="w-[14px] h-[14px]" alt="Location" />
                                                <p className="text-[12px] sub-text ml-2">{info.venue}</p>
                                            </span>
                                            <span className="flex items-center">
                                                <img src={cost} className="w-[14px] h-[14px]" alt="Cost" />
                                                <p className="text-[12px] sub-text ml-2">Free</p>
                                            </span>
                                        </div>
                                        <div className="flex justify-end">
                                            <button
                                                className="bg-[#194b88] hover:bg-[#123a6b] text-[#fff] text-[12px] py-2 px-4 rounded-[30px]"
                                                onClick={handleReadMoreClick}
                                            >
                                                Read More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Events;