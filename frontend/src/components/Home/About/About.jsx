import "./About.css";
import Values from "../../Shared/Values/Values";

import {BsArrowRight} from "react-icons/bs";

import CodeSvg from "../../../assets/code.svg?react";
import ChalkBoardSvg from "../../../assets/chalkboard.svg?react";
import BookSvg from "../../../assets/book.svg?react";
import ArrSvg1 from "../../../assets/arr-trending-left.svg?react";
import ArrSvg2 from "../../../assets/arr-trending-right.svg?react";
import ArrSvg3 from "../../../assets/arr-trending-right2.svg?react";

import Nacos_tree from "../../../assets/imgs/nacos-tree.webp";
import img1 from "../../../assets/imgs/home-img2.webp";
import img2 from "../../../assets/imgs/home-img3.webp";

const ACTIVITIES = [
    {
        icon: <CodeSvg/>,
        title: "hackathon",
        className: "hack",
        text: "We host hackathons and competitions for students in the computing field",
    },
    {
        icon: <ChalkBoardSvg/>,
        title: "Tech Bootcamps",
        className: "camp",
        text: "We host hackathons and competitions for students in the computing field",
    },
    {
        icon: <BookSvg/>,
        title: "Tech Savy",
        className: "savy",
        text: "We host hackathons and competitions for students in the computing field",
    },
];

const About = () => {
    return (
        <section className="home-about">
            <div className="home-about-container">
                <div className="home-about-sec1">
                    <div className="sec1-content">
                        <div>
                            <hgroup className="sec1-titles">
                                <h3>About us</h3>
                                <h1>NACOS Unilorin: Your Tech Community</h1>
                            </hgroup>
                            <p className="sec1-text">
                                Nigeria Association of Computing Students (NACOS) Unilorin is the umbrella body for
                                Unilorin students in Computer Science, Computer Engineering, Telecommunication Science,
                                Information Technology and Computer Science Education. With a 20+ year legacy and
                                nationwide presence, NACOS is your vibrant community for networking, growth, and
                                innovation.
                            </p>
                            <button>
                                <span>learn more</span>
                                <BsArrowRight/>
                            </button>
                        </div>
                    </div>
                    <div className="sec1-img">
                        <img src={img1} alt=""/>
                    </div>
                </div>
                <div className="home-about-sec2">
                    <div className="nacos-tree">
                        <img src={Nacos_tree}/>
                    </div>
                </div>
                <div className="home-about-sec3">
                    <Values/>
                </div>
                <div className="home-about-sec4">
                    <div className="activities">
                        <ArrSvg1 className="arr arr-t-left"/>
                        <ArrSvg2 className="arr arr-b-left"/>
                        <ArrSvg3 className="arr  arr-t-right"/>
                        <h1 className="activities-title">
                            <span> We empower computing students</span>
                            <span>
                {" "}
                                to achieve{" "}
                                <span className="text-green">exponential growth</span>
              </span>
                        </h1>
                        <div className="activities-container">
                            <div className="activities-img">
                                <img src={img2} alt="activity img"/>
                            </div>
                            <div className="activities-list">
                                {ACTIVITIES.map(({title, icon, text, className}) => (
                                    <div
                                        key={"activity" + title}
                                        className={`activity activity-${className}`}
                                    >
                                        <div className="activity-header">
                                            <span className="activity-icn">{icon}</span>
                                            <h4 className="activity-title">{title}</h4>
                                        </div>
                                        <div className="activity-text">{text}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
