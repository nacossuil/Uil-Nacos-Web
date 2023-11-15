import './ContactPage.css'
import Img from '../../assets/customer-support.png'
import Person from '../../assets/fluent_person-20-filled.svg'
import Email from '../../assets/email-icon.svg'
import Ic from '../../assets/ic_outline-subject.svg'
import AntDesign from '../../assets/ant-design_message-filled.svg'

const ContactPage = () => {
  return (
    <section className="c-wrapper">
      <div className="flexCenter c-container">
        <div className="flexCenter first">
          <div className="c-heading">
            <h1 className="textBig">Contact Us</h1>
          </div>
          <div className="image-container">
            <img src={Img} alt="bgImg" />
          </div>
        </div>
        <div className="second">
          <div className="textBig s-text">
            If you have any questions or need assistance, please {`don't`}{' '}
            hesitate to reach out to us.
          </div>
          <form className="form">
            <img src={Person} alt="person" className="icon" />
            <input type="text" placeholder="Your Name" />
            <img src={Email} alt="person" className="icon" />
            <input type="text" placeholder="Email Address" />
            <img src={Ic} alt="person" className="icon" />
            <input type="text" placeholder="Subject" />
            <img src={AntDesign} alt="" />
            <textarea name="" id="" cols="90" rows="10"></textarea>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
