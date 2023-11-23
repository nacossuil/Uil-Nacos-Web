import Values from '../../Shared/Values/Values'
import { BsArrowRight } from "react-icons/bs"
import './About.css'
import Nacos_tree from '../../../assets/imgs/nacos-tree.webp'
import img1 from "../../../assets/imgs/home-img2.webp"

const About = () => {
    return (
        <section className="home-about">
            <div className="home-about__container">
                <div className="home-about__sec1">
                    <div className="sec1__content">
                        <div>
                            <hgroup className='sec1__titles'>
                                <h3>About us</h3>
                                <h1>
                                    Most Organised Student Body in Unilorin
                                </h1>
                            </hgroup>
                            <p className='sec1__text'>
                                Nigeria Association of Computing Students (NACOS) is the umbrella body for students studying Computer Science, Computer Engineering, Information Systems, Cyber Security, Software Engineering, Telecommunications Engineering, and all IT-related courses in Nigeria and have been in existence for over two decades and NACOS can boast of its presence in almost all tertiary institutions in Nigeria (including privately owned ones).
                            </p>
                            <button >
                                <span>learn more</span>
                                <BsArrowRight />
                            </button>
                        </div>
                    </div>
                    <div className="sec1__img">
                        <img src={img1} alt="" />
                    </div>
                </div>
                <div className="home-about__sec2">
                    <div className='nacos-tree'>
                        <img src={Nacos_tree} />
                    </div>
                </div>
                <div className="home-about__sec3">
                    <Values />
                </div>
                <div className="home-about__sec4">

                </div>
            </div>
        </section>
    )
}

export default About