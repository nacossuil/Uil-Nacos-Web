import "./hero.css"
import { BsArrowDown } from "react-icons/bs"
import img1 from "../../../assets/imgs/home-img1.webp"

const Hero = () => {
    return (
        <section className="home-hero">
            <div className="home-hero-container">
                <div className="home-hero-img">
                    <img src={img1} alt="" />
                </div>
                <div className="home-hero-content">
                    <div>
                        <hgroup className="home-hero-titles">
                            <h3>Welcome to</h3>
                            <h1>
                                <span>Nigeria Association Of </span>
                                <span> Computing Students (NACOS)</span>
                            </h1>
                            <h3 className="home-hero-title--blue">University of Ilorin Chapter</h3>
                        </hgroup>

                        <p className="home-hero-text">We provide access to technical contents such as programming, networking etc.</p>
                        <button>
                            <span>Learn more</span>
                            <BsArrowDown />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero