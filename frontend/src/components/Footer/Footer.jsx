import "./footer.css";
import nacosLogo from "../../assets/imgs/nacos-logo.png";
import unilorinLogo from "../../assets/unilorin-logo.svg";
import {BsInstagram, BsTwitter, BsLinkedin} from "react-icons/bs";
import {Link} from "react-router-dom";

const socials = [
    {
        name: "twitter",
        icon: <BsTwitter/>,
        url: "https://x.com/NACOSS_UIL",
    },
    {
        name: "instagram",
        icon: <BsInstagram/>,
        url: "https://www.instagram.com/nacoss_unilorin",
    },
    {
      name: "linkedin",
      icon: <BsLinkedin />,
      url: "https://www.linkedin.com/company/nigerian-association-of-computer-science-students-unilorin",
    },
];

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logos">
                    <img
                        src={nacosLogo}
                        alt=""
                        style={{width: "auto", height: "75px"}}
                    />
                    <img src={unilorinLogo} alt=""/>
                </div>
                <div className="footer-socials">
                    <h5>Follow us on</h5>
                    <div>
                        {socials.map(({name, url, icon}) => (
                            <Link
                                className={`footer-social footer-social-${name.toLowerCase()}`}
                                key={name}
                                to={`${url}`}
                            >
                                <span>{icon}</span>
                                <span>{name}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                <p>© {new Date().getFullYear()} NACOSS Unilorin. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
