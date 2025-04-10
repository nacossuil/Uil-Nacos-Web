import { motion } from 'framer-motion';

const DownArrow = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M6 9l6 6 6-6" />
    </svg>
);

const PageIntro = () => {
    const bounceAnimation = {
        y: [0, -8, 0],
        transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <section className="min-h-[300px] bg-[194b88] py-20">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                    {/* Text Content */}
                    <div className="flex-1">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-5xl font-bold text-gray-900 mb-6 tracking-tight"
                        >
                            Opportunities for Students
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl leading-relaxed text-gray-700 mb-8 max-w-2xl"
                        >
                            Welcome to the Student Opportunities Hub, your go-to resource for discovering exciting
                            opportunities in technology and beyond. Explore scholarships, internships, hackathons, and
                            more to enrich your academic journey and future career.
                        </motion.p>
                        <motion.a
                            href="#resources-section"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white bg-[#194b88] rounded-full hover:bg-[#153a6a] transition-colors duration-200 group" // Changed from bg-green-700 to #194b88 and hover:bg-green-800 to #153a6a
                        >
                            <span>Learn more</span>
                            <motion.div
                                animate={bounceAnimation}
                                className="relative top-[1px]"
                            >
                                <DownArrow />
                            </motion.div>
                        </motion.a>
                    </div>

                    {/* Image Container */}
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="rounded-3xl overflow-hidden bg-[#e6e9ff]">
                            <motion.img
                                src={new URL('../../../assets/Technology-in-Schools-Opportunities-and-Challenges.jpg', import.meta.url).href}
                                alt="Students learning online"
                                className="w-full h-auto object-cover"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PageIntro;