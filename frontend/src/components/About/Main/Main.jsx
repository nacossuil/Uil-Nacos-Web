import { BsArrowDown } from "react-icons/bs";
import Nacos_connect from "../../../assets/imgs/peoples-img.jpg";
import "./main.css";

const Main = () => {
  return (
    <div className="about-page-main">
      <div className="section1">
        <div className="about">
          <h4>ABOUT US</h4>
          <h2>NACOSS Unilorin: Empowering Tech Leaders of Tomorrow</h2>
          <p>
            Nigerian Association of Computer Science Students (NACOSS) Unilorin
            chapter is the premier hub for tech enthusiasts across multiple
            disciplines. We unite students from Computer Science, Computer
            Engineering, Telecommunication Science, Information Technology, and
            Computer Science Education under one dynamic umbrella.
          </p>
          <p>
            With over two decades of excellence and a nationwide network, NACOSS
            Unilorin offers:
          </p>
          <ul>
            <li>Cutting-edge workshops and seminars</li>
            <li>Networking opportunities with industry leaders</li>
            <li>Hands-on projects to build your portfolio</li>
            <li>Leadership development programs</li>
            <li>Access to internships and job opportunities</li>
          </ul>
          <p>
            Join us to innovate, collaborate, and shape the future of technology
            in Nigeria and beyond!
          </p>
          {/* <a
            href="https://www.instagram.com/nacoss_unilorin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="learn-more-btn">
              <span>Learn More</span>
              <BsArrowDown className="arrow-icon" />
            </button>
          </a> */}
          <a className="learn-more-btn" href="#values-section">
            Learn More
            <BsArrowDown />
          </a>
        </div>
        <div className="section1-img">
          <img
            src={Nacos_connect}
            alt="NACOS Unilorin community illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
