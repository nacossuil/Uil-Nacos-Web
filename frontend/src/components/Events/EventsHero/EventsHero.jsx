import "./eventshero.css";
import heroImg from "../../../assets/imgs/eventshero.png";

const EventsHero = () => {
    return (
        <div className="hero-about">
            <div className="hero-about-cont">
                <p className="text-center leading-[28px] font-bold text-[3rem] mb-4 hero-text">
                    Events and Bootcamps
                </p>
                <img src={heroImg} alt="bgImg"/>
            </div>
        </div>
    );
};

export default EventsHero;
