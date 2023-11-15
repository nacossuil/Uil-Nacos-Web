import './ContactPage.css'
import Img from '../../assets/customer-support.png'
import Person from '../../assets/fluent_person-20-filled.svg'
import Email from '../../assets/email-icon.svg'
import Ic from '../../assets/ic_outline-subject.svg'

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
            <input type="text" />
            <img src={Email} alt="person" className="icon" />
            <input type="text" />
            <img src={Ic} alt="person" className="icon" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
