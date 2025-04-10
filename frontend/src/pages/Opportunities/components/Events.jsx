import PropTypes from "prop-types";
import { motion } from 'framer-motion';

const Events = ({ eventsData, heading }) => {
    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block group">
                        {heading}
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-[#194b88] transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" /> {/* Changed from #0E7A3B to #194b88 */}
                    </h2>
                </motion.div>
                <EventCards eventsData={eventsData} />
            </div>
        </section>
    );
};

const EventCards = ({ eventsData }) => {
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsData.map((event, i) => (
                <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="h-full" // Ensure the motion container takes full height
                >
                    <EventCard
                        img={event.img}
                        title={event.title}
                        description={event.description}
                        date={event.date}
                        location={event.location}
                        link={event.link}
                    />
                </motion.li>
            ))}
        </ul>
    );
};

const EventCard = ({ img, title, description, date, location, link }) => {
    return (
        <div className="flex flex-col h-full rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-white">
            {/* Image Container - Fixed height */}
            <div className="relative w-full h-48 overflow-hidden">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
            </div>

            {/* Content Container - Flex column with consistent spacing */}
            <div className="flex flex-col flex-1 p-6">
                {/* Title and Description */}
                <div className="mb-auto">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-[#194b88] transition-colors duration-300 line-clamp-2"> {/* Changed from #0E7A3B to #194b88 */}
                        {title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {description}
                    </p>
                </div>

                {/* Footer Content - Fixed position at bottom */}
                <div className="pt-4 border-t border-gray-100">
                    {/* Date and Location */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-2">
                            <span className="inline-flex items-center gap-1">
                                📅 <span className="text-gray-600">{date}</span>
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="inline-flex items-center gap-1">
                                📍 <span className="text-gray-600">{location}</span>
                            </span>
                        </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex justify-end">
                        <a
                            href={link || "/#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center text-white rounded-lg bg-[#194b88] px-6 py-2 transition-colors duration-300 hover:bg-[#153a6a] focus:ring-2 focus:ring-[#194b88] focus:ring-offset-2" /* Changed from #0E7A3B to #194b88, hover from #096330 to #153a6a, focus ring from #0E7A3B to #194b88 */
                        >
                            View Event
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

Events.propTypes = {
    eventsData: PropTypes.array,
    heading: PropTypes.string,
};

EventCards.propTypes = {
    eventsData: PropTypes.array,
};

EventCard.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    location: PropTypes.string,
    link: PropTypes.string,
};

export default Events;