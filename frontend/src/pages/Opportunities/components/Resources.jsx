import PropTypes from "prop-types";
import { motion } from 'framer-motion';

const Resources = ({ data, heading }) => {
    return (
        <section className="section-resources py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="container-center max-w-6xl mx-auto px-4">
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
                <ResourcesCards data={data} />
            </div>
        </section>
    );
};

const ResourcesCards = ({ data }) => {
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((data, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                    <ResourcesCard
                        img={data.img}
                        title={data.title}
                        description={data.description}
                        level={data.level}
                        link={data.link}
                    />
                </motion.div>
            ))}
        </ul>
    );
};

const ResourcesCard = ({ img, title, description, level, link }) => {
    let color, bgColor;

    if (level === "Beginner" || level === "Scholarship") {
        bgColor = "#c0c6e4";
        color = "#192666";
    }

    if (level === "Intermediate" || level === "Community") {
        bgColor = "#FF0F9F1F";
        color = "#FF0F9F";
    }

    if (level === "Advanced" || level === "Financial Support") {
        bgColor = "#194b881F"; /* Changed from #1386011F to #194b881F (blue with transparency) */
        color = "#194b88"; /* Changed from #080908 to #194b88 */
    }

    return (
        <li className="card flex flex-col rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-white">
            <div className="relative overflow-hidden">
                <img
                    src={img}
                    alt="course"
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
            </div>
            <div className="content flex flex-col flex-1 p-6">
                <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-[#194b88] transition-colors duration-300"> {/* Changed from #0E7A3B to #194b88 */}
                        {title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6">{description}</p>
                </div>
                <div className="flex items-center justify-between mt-auto">
                    <span
                        style={{
                            backgroundColor: level ? bgColor : "#c0c6e4",
                            color: level ? color : "#192666",
                            padding: "8px 10px"
                        }}
                        className="rounded-full text-sm font-medium"
                    >
                        {level ? level : "Scholarship"}
                    </span>
                    <a
                        href={link || "/#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            padding: "8px 12px",
                            backgroundColor: "#194b88" /* Changed from #0E7A3B to #194b88 */
                        }}
                        className="inline-flex items-center text-white rounded-lg transition-colors duration-300 hover:bg-[#153a6a] focus:ring-2 focus:ring-[#194b88] focus:ring-offset-2" /* Changed hover and focus colors */
                    >
                        {level ? "View course" : "Apply"}
                    </a>
                </div>
            </div>
        </li>
    );
};

Resources.propTypes = {
    data: PropTypes.array,
    heading: PropTypes.string,
};

ResourcesCards.propTypes = {
    data: PropTypes.array,
};

ResourcesCard.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    level: PropTypes.string,
    link: PropTypes.string,
};

export default Resources;