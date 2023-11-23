/* eslint-disable react/prop-types */
import './executive.css'

const Executive = ({ data }) => {
  const { img, postion, level, dept, email, socials, name } = data

  return (
    <div className="executive">
      <img src={img} alt="" />
      <div className="executive-details">
        <p className="executive-name">{name}</p>
        <div className="executive-acad">

          <div className="executive-acad-detail">

            <div className="executive-acad-text">{postion}</div>
          </div>
          <div className="executive-acad-detail">

            <div className="executive-acad-text">{level}L {dept}</div>
          </div>
          <div className="executive-acad-detail">

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