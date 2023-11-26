/* eslint-disable react/prop-types */
import './executive.css'
import { BsBriefcaseFill, } from "react-icons/bs"
import { FaGraduationCap, } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'

const Executive = ({ data }) => {
  const { img, position, level, dept, email, socials, name } = data

  return (
    <div className="executive">
      <img src={img} alt="" />
      <div className="executive-details">
        <p className="executive-name">{name}</p>
        <div className="executive-acad">
          <div className="executive-acad-detail">
            <BsBriefcaseFill />
            <div className="executive-acad-text">{position}</div>
          </div>
          <div className="executive-acad-detail">
            <FaGraduationCap />
            <div className="executive-acad-text">{level}L {dept}</div>
          </div>
          <div className="executive-acad-detail">
            <IoMail />
            <div className="executive-acad-text">{email}</div>
          </div>

        </div>
        <div className="executive-sm">
          {
            socials.map(({ name, Icn, url }) => (
              <a key={name} href={url}>
                {<Icn />}
              </a>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Executive