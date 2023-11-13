import PropTypes from "prop-types";
import "./Opportunitiespage.css";

const OpportunitiesPage = () => {
  return (
    <div className="opportunities">
      <PageIntro />
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
            <h1 className="heading">Opportunities for Students</h1>
            <p className="text-md">
              Welcome to our student opportunities hub, where we are dedicated
              to helping you discover exciting opportunities in the world of
              technology and beyond. Explore scholarships, internships,
              hackathons, and more to enhance your academic journey.
            </p>
            <Button text="Learn more ↓" />
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

// Re-usable button component (intended to be re-used throughout the entire page)
const Button = ({ text }) => {
  return <button className="btn">{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string,
};
