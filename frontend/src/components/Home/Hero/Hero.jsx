import "./hero.css";
import { BsArrowDown } from "react-icons/bs";
import img1 from "../../../assets/imgs/hero1sec.jpg";
import grid from "../../../assets/grid-bg.svg";

const Hero = () => {
  return (
    <section
      className="home-hero"
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="home-hero-container">
        <div className="home-hero-img">
          <img src={img1} alt="" />
        </div>
        <div className="home-hero-content">
          <div>
            <hgroup className="home-hero-titles">
              <h3>Welcome to</h3>
              <h1>
                <span>Nigerian Association Of </span>
                <span>Computer Science Students (NACOSS)</span>
              </h1>
              <h3 className="home-hero-title--blue">
                The University of Ilorin Chapter
              </h3>
            </hgroup>
            <p className="home-hero-text">
              We empower innovation and excellence in tech through resources,
              industry updates, and connections.
            </p>
            <a className="scroll-btn" href="#about-page">
              Learn More
              <BsArrowDown />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
