import PropTypes from "prop-types";
import "./Opportunitiespage.css";
import {
  tempCoursesData,
  tempScholarshipsData,
  tempEventsData,
} from "./tempData";

const OpportunitiesPage = () => {
  return (
    <div className="opportunities">
      <PageIntro />
      <Resources data={tempCoursesData} heading="Shared Career Resources" />
      <Resources
        data={tempScholarshipsData}
        heading="Discover Scholarships & Financial Support"
      />
      <Events
        data={tempEventsData}
        heading="Tech Competitions and Hackathons"
      />
    </div>
  );
};

export default OpportunitiesPage;

// Note: All Sub-components would be organised into their own files Later
const PageIntro = () => {
  return (
    <section className="section-intro">
      <div className="container-center">
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

const Resources = ({ data, heading }) => {
  return (
    <section className="section-courses">
      <div className="container-center">
        <h1 className="heading-md">{heading}</h1>
        <ResourcesCards data={data} />
      </div>
    </section>
  );
};

Resources.propTypes = {
  data: PropTypes.array,
  heading: PropTypes.string,
};

const ResourcesCards = ({ data }) => {
  return (
    <ul className="cards">
      {data.map((data, i) => (
        <ResourcesCard
          key={i}
          img={data.img}
          title={data.title}
          description={data.description}
          level={data.level}
        />
      ))}
    </ul>
  );
};

ResourcesCards.propTypes = {
  data: PropTypes.array,
};

const ResourcesCard = ({ img, title, description, level }) => {
  let color, bgColor;

  if (level === "Beginner") {
    bgColor = "#c0c6e4";
    color = "#192666";
  }

  if (level === "Expert") {
    bgColor = "#1386011F";
    color = "#138601";
  }
  if (level === "Intermediate") {
    bgColor = "#FF0F9F1F";
    color = "#FF0F9F";
  }

  return (
    <li className="card">
      <img src={img} alt="course" />
      <div className="content">
        <h3 className="heading-sm">{title}</h3>
        <p className="text-sm">{description}</p>
        <div className="justify-flex">
          <span
            style={{
              backgroundColor: level ? bgColor : "#c0c6e4",
              color: level ? color : "#1u92666",
            }}
            className="tag"
          >
            {level ? level : "Scholarship"}
          </span>
          <a href="/#" className="btn btn-md">
            {level ? "View course" : "Apply"}
          </a>
        </div>
      </div>
    </li>
  );
};

ResourcesCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  level: PropTypes.string,
};

const Events = ({ data, heading }) => {
  return (
    <section className="section-courses">
      <div className="container-center">
        <p className="heading-desc">Test your skills</p>
        <h1 className="heading-md">{heading}</h1>
        <EventCards data={data} />
      </div>
    </section>
  );
};

Events.propTypes = {
  data: PropTypes.array,
  heading: PropTypes.string,
};

const EventCards = ({ data }) => {
  return (
    <ul className="cards">
      {data.map((data, i) => (
        <EventCard
          key={i}
          img={data.img}
          title={data.title}
          description={data.description}
          date={data.date}
          time={data.time}
          venue={data.venue}
        />
      ))}
    </ul>
  );
};

EventCards.propTypes = {
  data: PropTypes.array,
};

const EventCard = ({ img, title, description, date, time, venue }) => {
  return (
    <li className="card">
      <img src={img} alt="event" />
      <div className="content">
        <h3 className="heading-sm">{title}</h3>
        <p className="text-sm">{description}</p>
        <div className="justify-flex">
          <p className="text-x-sm event-details">
            <span>{date}</span>
            <span>{time}</span>
            <span>{venue}</span>
          </p>
          <a href="/#" className="btn btn-md">
            Register
          </a>
        </div>
      </div>
    </li>
  );
};

EventCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  venue: PropTypes.string,
};
