import PropTypes from "prop-types";
import "./Opportunitiespage.css";
import { tempCoursesData, tempScholarshipsData } from "./tempData";

const OpportunitiesPage = () => {
  return (
    <div className="opportunities">
      <PageIntro />
      <Resources data={tempCoursesData} heading="Shared Career Resources" />
      <Resources
        data={tempScholarshipsData}
        heading="Discover Scholarships & Financial Support"
      />
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

const Resources = ({ data, heading }) => {
  return (
    <section className="section-courses">
      <div className="container">
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
    <ul className="resources__cards">
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
    <li className="resources__card">
      <img src={img} alt="course" />
      <div className="content">
        <h3 className="heading-sm">{title}</h3>
        <p className="text-sm">{description}</p>
        <div className="justify-flex">
          <span
            style={{
              backgroundColor: level ? bgColor : "#c0c6e4",
              color: level ? color : "#192666",
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
