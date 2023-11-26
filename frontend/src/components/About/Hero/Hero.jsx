import './hero.css'

import peopleImg from "../../../assets/imgs/people-group.webp"


const Hero = () => {
  return (
    <div className='hero-about'>
      <div className="hero-about-cont">
        <h1 className="hero-about-heading">About NACOS - Unilorin</h1>
        <img src={peopleImg} alt="bgImg" />
      </div>
    </div>
  )
}

export default Hero