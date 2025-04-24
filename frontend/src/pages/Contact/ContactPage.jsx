import { useState } from "react";
import FAQs from "../../components/Shared/FAQs/Faqs";
import "./ContactPage.css";
import Img from "../../assets/customer-support.png";
import Person from "../../assets/fluent_person-20-filled.svg";
import Email from "../../assets/email-icon.svg";
import Ic from "../../assets/ic_outline-subject.svg";
import AntDesign from "../../assets/ant-design_message-filled.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Switch from "@mui/material/Switch";
import Grid from "../../assets/grid-bg.svg";
import axios from "axios";
import { baseURL } from "../../utils/constant";

const ContactPage = () => {
  const [showRequiredField, setShowRequiredField] = useState(true);
  const [checked, setChecked] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // handle input field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // submitting the form logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('Form Data:', formData)
    try {
      const response = await axios.post(
        `${baseURL}/api/submit-contact-form`,
        formData
      );

      if (response.status === 200) {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => {
          toast.success("Message submitted successfully!", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }, 200);
      }
    } catch (ignored) {
      toast.warning("An error occurred!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  // handle switch change
  const handleClick = () => {
    setChecked(!checked);
    setShowRequiredField(!showRequiredField);
  };

  const { name, email, subject, message } = formData;

  return (
    <section
      className="c-wrapper"
      style={{
        backgroundImage: `url(${Grid})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
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
            If you have any questions or need assistance, please {`don't`}{" "}
            hesitate to reach out to us.
          </div>

          <div className="switch">
            <p>Go anonymously (Toggle to Display Only Required Fields)</p>
            <Switch
              checked={checked}
              inputProps={{ "aria-label": "controlled" }}
              onClick={handleClick}
              color={"success"}
            />
          </div>

          <form className="form" onSubmit={handleSubmit}>
            {showRequiredField && (
              <div>
                <img src={Person} alt="person" className="icon" id="icon" />
                <input
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Your Name (optional)"
                  onChange={handleChange}
                />
                <img src={Email} alt="person" className="icon" id="icon" />
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email Address (optional)"
                  onChange={handleChange}
                />
              </div>
            )}

            <div>
              <img src={Ic} alt="person" className="icon" id="icon" />
              <input
                type="text"
                name="subject"
                value={subject}
                placeholder="Subject"
                onChange={handleChange}
                required
              />
              <img src={AntDesign} alt="" className="icon" id="icon" />
              <textarea
                placeholder="Message"
                name="message"
                value={message}
                className="textarea"
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="textSmall btn-submit">
                Send Message
              </button>
            </div>

            <ToastContainer />
          </form>
        </div>
        <FAQs />
      </div>
    </section>
  );
};

export default ContactPage;
