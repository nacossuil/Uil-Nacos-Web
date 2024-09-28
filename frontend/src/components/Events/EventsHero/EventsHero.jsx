import "./hero.css";

import heroImg from "../../../assets/imgs/eventshero.png";

const
    EventsHero = () => {
        return (
            <div className="hero-about">
                <div className="hero-about-cont">
                    <h1 className="hero-about-heading">Events and Bootcamps</h1>
                    <img src={heroImg} alt="bgImg"/></div>
            </div>
        );
    };

export default EventsHero;
