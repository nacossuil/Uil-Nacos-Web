import {BsArrowDown} from 'react-icons/bs';
import Nacos_connect from "../../../assets/imgs/nacos-connect.webp";
import "./main.css"

const Main = () => {
    return (
        <div className="about-page-main">
            <div className="section1">
                <div className="about">
                    <h4>ABOUT US</h4>
                    <h2>NACOS Unilorin: Empowering Tech Leaders of Tomorrow</h2>
                    <p>
                        The Nigeria Association of Computing Students (NACOS) Unilorin chapter is the premier hub for
                        tech enthusiasts across multiple disciplines. We unite students from Computer Science, Computer
                        Engineering, Telecommunication Science, Information Technology, and Computer Science Education
                        under one dynamic umbrella.
                    </p>
                    <p>
                        With over two decades of excellence and a nationwide network, NACOS Unilorin offers:
                    </p>
                    <ul>
                        <li>Cutting-edge workshops and seminars</li>
                        <li>Networking opportunities with industry leaders</li>
                        <li>Hands-on projects to build your portfolio</li>
                        <li>Leadership development programs</li>
                        <li>Access to internships and job opportunities</li>
                    </ul>
                    <p>
                        Join us to innovate, collaborate, and shape the future of technology in Nigeria and beyond!
                    </p>
                    <button className="learn-more-btn">
                        <span>Learn More</span>
                        <BsArrowDown className="arrow-icon"/>
                    </button>
                </div>
                <div className="section1-img">
                    <img src={Nacos_connect} alt="NACOS Unilorin community illustration"/>
                </div>
            </div>
        </div>
    );
};

export default Main;