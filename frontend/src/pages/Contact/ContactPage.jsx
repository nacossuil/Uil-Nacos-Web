import { useState } from 'react'
import FAQs from '../../components/FAQs/FAQs'
import './ContactPage.css'
import Img from '../../assets/customer-support.png'
import Person from '../../assets/fluent_person-20-filled.svg'
import Email from '../../assets/email-icon.svg'
import Ic from '../../assets/ic_outline-subject.svg'
import AntDesign from '../../assets/ant-design_message-filled.svg'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Data:', formData)

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    }) // Reset the form state
  }

  const showToastMessage = () => {
    const myPromise = new Promise((resolve) =>
      fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((json) => setTimeout(() => resolve(json), 300)),
    )

    toast.promise(myPromise, {
      pending: 'sending message',
      success: 'Thanks for contacting us!',
      error: 'error',
    })
  }

  const { name, email, subject, message } = formData

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
          <form className="form" onSubmit={handleSubmit}>
            <img src={Person} alt="person" className="icon" />
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Your Name (optional)"
              onChange={handleChange}
            />
            <img src={Email} alt="person" className="icon" />
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Email Address (optional)"
              onChange={handleChange}
            />
            <img src={Ic} alt="person" className="icon" />
            <input
              type="text"
              name="subject"
              value={subject}
              placeholder="Subject"
              onChange={handleChange}
              required
            />
            <img src={AntDesign} alt="" className="icon" />
            <textarea
              placeholder="Message"
              name="message"
              value={message}
              className="textarea"
              onChange={handleChange}
              required
            ></textarea>
            <button
              type="submit"
              className="textSmall btn-submit"
              onClick={showToastMessage}
            >
              Send Message
            </button>
            <ToastContainer />
          </form>
        </div>
        <div className="third">
          <div className="textBig t-text">FAQs and Answers.</div>
        </div>
        <FAQs />
      </div>
    </section>
  )
}

export default ContactPage
