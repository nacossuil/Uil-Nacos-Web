import "./main.css";
import Nacos_connect from "../../../assets/imgs/nacos-connect.webp";
import {BsArrowRight} from "react-icons/bs";

const Main = () => {
    return (
        <div className="about-page-main">
            <div className="section1">
                <div className="about">
                    <h4>ABOUT US</h4>
                    <h2>NACOS Unilorin: Your Tech Community</h2>
                    <p>
                        Nigeria Association of Computing Students (NACOS) Unilorin is the umbrella body for Unilorin
                        students in Computer Science, Computer Engineering, Telecommunication Science, Information
                        Technology and Computer Science Education. With a 20+ year legacy and nationwide presence, NACOS
                        is your vibrant community for networking, growth, and innovation.
                    </p>
                </div>
                <div className="section1-img">
                    <img src={Nacos_connect} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Main;
