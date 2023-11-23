import './Executives.css'
import Exec1 from '../../../assets/imgs/exec1.webp'
import Exec2 from '../../../assets/imgs/exec2.webp'
import Exec3 from '../../../assets/imgs/exec3.webp'
import Exec4 from '../../../assets/imgs/exec4.png'
import leftArrow from '../../../assets/left-arrow-icon.png'
import briefcase from '../../../assets/brief-case-icon.svg'
import graduateCap from '../../../assets/graduate-cap-icon.svg'
import email from '../../../assets/email-icon.svg'
import twitter from '../../../assets/twitter-icon.svg'
import linkedin from '../../../assets/linkedin-icon.svg'

const Executives = () => {
    return(
        <section className="executive">
            <p className="executive-head">Meet the NACOS Executives</p>
            <p className="executive-subhead">Meet the current passionate students driving the success of the community</p>

            <div className="executive-cont">
                <div className="executive-team">
                    <div className="executive-mem-cont">
                        <div className="executive-members">
                            <img src={Exec1} alt="" />
                            <div className="executive-details">
                                <p className="executive-name">Gbolarumi Elijah . A</p>
                                <div className="executive-acad">

                                    <div className="executive-acad-detail">
                                        <img src={briefcase} alt="" />
                                        <div className="executive-acad-text">NACOS President</div>
                                    </div>
                                    <div className="executive-acad-detail">
                                        <img src={graduateCap} alt="" />
                                        <div className="executive-acad-text">400L, Computer Science</div>
                                    </div>
                                    <div className="executive-acad-detail">
                                        <img src={email} alt="" />
                                        <div className="executive-acad-text">gbolajah23@gmail.com</div>
                                    </div>
                                    
                                </div>
                                <div className="executive-sm">
                                    <a href="#">
                                        <img src={twitter} alt="" />
                                    </a>
                                    <a href="#">
                                        <img src={linkedin} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="executive-members">
                            <img src={Exec2} alt="" />
                            <div className="executive-details">
                                <p className="executive-name">Gbolarumi Elijah . A</p>
                                <div className="executive-acad">

                                    <div className="executive-acad-detail">
                                        <img src={briefcase} alt="" />
                                        <div className="executive-acad-text">NACOS President</div>
                                    </div>
                                    <div className="executive-acad-detail">
                                        <img src={graduateCap} alt="" />
                                        <div className="executive-acad-text">400L, Computer Science</div>
                                    </div>
                                    <div className="executive-acad-detail">
                                        <img src={email} alt="" />
                                        <div className="executive-acad-text">gbolajah23@gmail.com</div>
                                    </div>
                                    
                                </div>
                                <div className="executive-sm">
                                    <a href="#">
                                        <img src={twitter} alt="" />
                                    </a>
                                    <a href="#">
                                        <img src={linkedin} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="executive-team">
                    <div className="executive-mem-cont">
                        <div className="executive-members">
                            <img src={Exec3} alt="" />
                            <div className="executive-details">
                                <p className="executive-name">Gbolarumi Elijah . A</p>
                                <div className="executive-acad">

                                    <div className="executive-acad-detail">
                                        <img src={briefcase} alt="" />
                                        <div className="executive-acad-text">NACOS President</div>
                                    </div>
                                    <div className="executive-acad-detail">
                                        <img src={graduateCap} alt="" />
                                        <div className="executive-acad-text">400L, Computer Science</div>
                                    </div>
                                    <div className="executive-acad-detail">
                                        <img src={email} alt="" />
                                        <div className="executive-acad-text">gbolajah23@gmail.com</div>
                                    </div>
                                    
                                </div>
                                <div className="executive-sm">
                                    <a href="#">
                                        <img src={twitter} alt="" />
                                    </a>
                                    <a href="#">
                                        <img src={linkedin} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="executive-members">
                            <img src={Exec4} alt="" />
                            <div className="executive-details">
                                <p className="executive-name">Gbolarumi Elijah . A</p>
                                <div className="executive-acad">

                                    <div className="executive-acad-detail">
                                        <img src={briefcase} alt="" />
                                        <div className="executive-acad-text">NACOS President</div>
                                    </div>
                                    <div className="executive-acad-detail">
                                        <img src={graduateCap} alt="" />
                                        <div className="executive-acad-text">400L, Computer Science</div>
                                    </div>
                                    <div className="executive-acad-detail">
                                        <img src={email} alt="" />
                                        <div className="executive-acad-text">gbolajah23@gmail.com</div>
                                    </div>
                                    
                                </div>
                                <div className="executive-sm">
                                    <a href="#">
                                        <img src={twitter} alt="" />
                                    </a>
                                    <a href="#">
                                        <img src={linkedin} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <a href="#" className="vae">
                <p className="vae-text">View all Executives</p>
                <img src={leftArrow} alt="" />
            </a>
        </section>
    )
}


export default Executives;