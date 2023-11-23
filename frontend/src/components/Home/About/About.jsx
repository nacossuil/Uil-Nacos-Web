import Values from '../../Shared/Values/Values'
import './About.css'
import Nacos_tree from '../../../assets/imgs/nacos-tree.webp'

const About = () => {
    return (
        <section className="home-about">
            <div className="home-about__container">
                <div className="home-about__sec1">
                    <div className="sec1__content">

                    </div>
                    <div className="sec1__img">
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