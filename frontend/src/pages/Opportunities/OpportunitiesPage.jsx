import "./Opportunitiespage.css";
import PropTypes from "prop-types";

const tempCoursesData = [
  {
    img: "./../../../src/assets/Opportunities/resources-img1.png",
    title: "JavaScript best pratices",
    description:
      "This course is designed to take your existing JavaScript knowledge and teach you how to leverage patterns and practices to take...",
    level: "Beginner",
  },
  {
    img: "./../../../src/assets/Opportunities/resources-img2.png",
    title: "JavaScript best pratices",
    description:
      "This course is designed to take your existing JavaScript knowledge and teach you how to leverage patterns and practices to take...",
    level: "Beginner",
  },
  {
    img: "./../../../src/assets/Opportunities/resources-img3.png",
    title: "JavaScript best pratices",
    description:
      "This course is designed to take your existing JavaScript knowledge and teach you how to leverage patterns and practices to take...",
    level: "Beginner",
  },
];

const OpportunitiesPage = () => {
  return (
    <div className="opportunities">
      <PageIntro />
      <Courses />
    </div>
  );
};

export default OpportunitiesPage;

// Note: All Sub-components would be organised into their own files Later
const PageIntro = () => {
  return (
    <section className="section-intro">
      <div className="container">
        <div className="intro__content">
          <div className="intro__content-text">
            <h1 className="heading-lg">Opportunities for Students</h1>
            <p className="text-md">
              Welcome to our student opportunities hub, where we are dedicated
              to helping you discover exciting opportunities in the world of
              technology and beyond. Explore scholarships, internships,
              hackathons, and more to enhance your academic journey.
            </p>
            <a href="/#" className="btn btn-lg">
              Learn more ↓
            </a>
          </div>
          <div className="intro__content-img-box">
            <img
              src="./../../../src/assets/Opportunities/intro-img.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Courses = () => {
  return (
    <section className="section-courses">
      <div className="container">
        <h1 className="heading-md">Shared Career Resources</h1>
        <CoursesCards />
      </div>
    </section>
  );
};

const CoursesCards = () => {
  return (
    <ul className="courses__cards">
      {tempCoursesData.map((course, i) => (
        <CoursesCard
          key={i}
          img={course.img}
          title={course.title}
          description={course.description}
          level={course.level}
        />
      ))}
    </ul>
  );
};

const CoursesCard = ({ img, title, description, level }) => {
  return (
    <li>
      <a href="\#" className="courses__card">
        <img src={img} alt="course" />
        <div className="content">
          <h3 className="heading-sm">{title}</h3>
          <p className="text-sm">{description}</p>
          <div className="justify-flex">
            <span className="tag">{level}</span>
            <a href="/#" className="btn btn-md">
              View course
            </a>
          </div>
        </div>
      </a>
    </li>
  );
};

CoursesCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  level: PropTypes.string,
};
