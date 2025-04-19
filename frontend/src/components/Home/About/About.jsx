import "./About.css";
import Values from "../../Shared/Values/Values";

import {BsArrowDown} from "react-icons/bs";
import ArrSvg1 from "../../../assets/arr-trending-left.svg?react";
import ArrSvg2 from "../../../assets/arr-trending-right.svg?react";
import ArrSvg3 from "../../../assets/arr-trending-right2.svg?react";

// import Nacos_tree from "../../../assets/imgs/nacos-tree.webp";
import img1 from "../../../assets/imgs/home-img2.webp";
import img2 from "../../../assets/imgs/home-img3.webp";

const About = () => {
    return (
        <section  className="home-about" id={"about-page"}
        >
            <div className="home-about-container">
                <div className="home-about-sec1">
                    <div className="sec1-content">
                        <div>
                            <hgroup className="sec1-titles">
                                <h5>About us</h5>
                                <h1> NACOSS Unilorin: Empowering Tech Talent</h1>
                            </hgroup>
                            <p className="sec1-text">
<<<<<<< HEAD
                                The Nigerian Association of Computer Science Students (NACOSS), University of Ilorin Chapter, is
                                the premier community for students of Computer Science.
=======
                                The Nigerian Association of Computer Science Students (NACOSS), University of Ilorin Chapter, is
                                the premier community for students of Computer Science, Computer Engineering,
                                Telecommunication Science, Information Technology, and Computer Science Education.
>>>>>>> e9f66e3b9717c1c266268c02675d0b86733416b9
                                With over two decades of excellence and a strong national footprint, NACOSS Unilorin
                                fosters a dynamic ecosystem for networking, professional growth, and innovative
                                collaborations, shaping the next generation of tech leaders.
                            </p>
                            <button>
                                Learn More
                                <BsArrowDown/>
                            </button>
                        </div>
                    </div>
                    <div className="sec1-img">
                        <img src={img1} alt=""/>
                    </div>
                </div>
                {/* <div className="home-about-sec2">
                    <div className="nacos-tree">
                        <img src={Nacos_tree}/>
                    </div>
                </div> */}
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
