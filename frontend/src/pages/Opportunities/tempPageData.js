// Use dynamic imports for image assets
const imageUrls = [
    new URL('../../assets/pluralsight image.png', import.meta.url).href,
    new URL('../../assets/data structure and algorithms.jpg', import.meta.url).href,
    new URL('../../assets/Machine-Learning.png', import.meta.url).href,
    new URL('../../assets/google africa.webp', import.meta.url).href,
    new URL('../../assets/andela image.png', import.meta.url).href,
    new URL('../../assets/outreachy.png', import.meta.url).href,
    new URL('../../assets/defcon.png', import.meta.url).href,
    new URL('../../assets/shecode.png', import.meta.url).href,
    new URL('../../assets/devfest.png', import.meta.url).href
];

export const tempCoursesData = [{
    img: imageUrls[0],
    title: "Web Development Fundamentals",
    description: "Master HTML, CSS, and JavaScript with hands-on projects and expert guidance. Build responsive websites and interactive web applications.",
    level: "Beginner",
}, {
    img: imageUrls[1],
    title: "Data Structures and Algorithms",
    description: "Enhance your problem-solving skills and prepare for technical interviews. Learn essential data structures and algorithms used in software development.",
    level: "Intermediate",
}, {
    img: imageUrls[2],
    title: "Machine Learning Essentials",
    description: "Dive into AI and ML with Python, covering key algorithms and real-world applications. Build predictive models and analyze complex datasets.",
    level: "Advanced",
}];

export const tempScholarshipsData = [{
    img: imageUrls[3],
    title: "Google Africa Developer Scholarship",
    description: "Fully-funded program for aspiring and professional developers in Africa. Gain skills in mobile and web development, cloud computing, and machine learning.",
}, {
    img: imageUrls[4],
    title: "Andela Learning Community",
    description: "Free tech skills training and mentorship for African developers. Access courses in web and mobile development, data science, and cloud computing.",
    level: "Community",
}, {
    img: imageUrls[5],
    title: "Outreachy | Internships Supporting Diversity in Tech",
    description: "Outreachy provides internships to people subject to systemic bias and impacted by under-representation in the technical industry where they are living.",
    level: "Financial Support",
}];

export const tempEventsData = [{
    img: imageUrls[6],
    title: "DEF CON",
    description: "One of the world's largest hacker conventions, DEF CON offers a student track, which includes workshops, talks, and hands-on experience for students interested in hacking and cybersecurity.",
    date: "Annually in August",
    time: "9 AM - 5 PM",
    venue: "Las Vegas, NV (Also online)",
}, {
    img: imageUrls[7],
    title: "Shecode Africa",
    description: "A registered non-profit organization dedicated to empowering and celebrating girls and women in technology across Africa",
    date: "Upcoming...",
    time: "Upcoming...",
    venue: "To be updated...",
}, {
    img: imageUrls[8],
    title: "DevFest Ilorin",
    description: "DevFest Ilorin is a community-driven tech event organized by Google Developer Groups (GDGs) in Ilorin. It offers workshops, tech talks, and networking opportunities for developers to enhance their skills and knowledge in various areas of technology.",
    date: "Upcoming...",
    time: "Upcoming...",
    venue: "To be updated...",
}];