import './main.css'
import Nacos_connect from '../../../assets/imgs/nacos-connect.webp'
import { BsArrowRight } from 'react-icons/bs'

const Main = () => {
    return (
        <div className='about-page-main'>
            <div className='section1'>
                <div className='about'>
                    <h4>ABOUT US</h4>
                    <h2>Most Organised Student Body in Unilorin</h2>
                    <p>Nigeria Association of Computing Students (NACOS) is the umbrella body for students studying Computer Science, Computer Engineering, Information Systems, Cyber Security, Software Engineering, Telecommunications Engineering, and all IT-related courses in Nigeria and have been in existence for over two decades and NACOS can boast of its presence in almost all tertiary institutions in Nigeria (including privately owned ones).</p>
                    <div className='learn-more'>
                        <p>Learn More</p>
                        <BsArrowRight className='arrow-right' />
                    </div>
                </div>
                <div className='section1-img'>
                    <img src={Nacos_connect} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Main