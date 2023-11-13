import './ContactPage.css'
import Img from '../../assets/customer-support.png'

const ContactPage = () => {
  return (
    <section className="c-wrapper">
      <div className="c-container">
        <div className="c-heading">
          <h1>Contact Us</h1>
        </div>
        <div className="image-container">
          <img src={Img} alt="bgImg" />
        </div>
      </div>
    </section>
  )
}

export default ContactPage
