import "./hero.css"
import { GoArrowDown } from 'react-icons/go'
import img1 from "../../../assets/imgs/home-img1.webp"

const Hero = () => {
    return (
        <section className="home-hero">
            <div className="home-hero__container">
                <div className="home-hero__img">
                    <img src={img1} alt="" />
                </div>
                <div className="home-hero__content">
                    <div>
                        <hgroup className="home-hero__titles">
                            <h3>Welcome to</h3>
                            <h1>
                                <span>Nigeria Association Of </span>
                                <span> Computing Students (NACOS)</span>
                            </h1>
                            <h3 className="home-hero__title--blue">University of Ilorin Chapter</h3>
                        </hgroup>

                        <p className="home-hero__text">We provide access to technical contents such as programming, networking etc.</p>
                        <button>
                            <span>Learn more</span>
                            <GoArrowDown />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero