import './footer.css'
import nacosLogo from '../../assets/nacos-logo.svg'
import unilorinLogo from '../../assets/unilorin-logo.svg'
import { BsTwitter, BsInstagram, BsLinkedin, BsFacebook } from 'react-icons/bs'

const socials = [
  {
    name: 'twitter',
    icon: <BsTwitter />,
    url: '#',
  },
  {
    name: 'instagram',
    icon: <BsInstagram />,
    url: '#',
  },
  {
    name: 'linkedin',
    icon: <BsLinkedin />,
    url: '#',
  },
  {
    name: 'facebook',
    icon: <BsFacebook />,
    url: '#',
  },
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logos">
          <img src={nacosLogo} alt="" />
          <img src={unilorinLogo} alt="" />
        </div>
        <div className="footer-socials">
          <h5>Follow us on</h5>
          <div>
            {socials.map(({ name, url, icon }) => (
              <a
                className={`footer-social footer-social-${name.toLowerCase()}`}
                key={name}
                href={url}
              >
                <span>{icon}</span>
                <span>{name}</span>
              </a>
            ))}
          </div>
        </div>

        <aside>© 2023 Chumskiisama. All rights reserved.</aside>
      </div>
    </footer>
  )
}

export default Footer
