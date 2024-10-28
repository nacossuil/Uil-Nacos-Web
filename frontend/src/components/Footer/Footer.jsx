import "./footer.css";
import nacosLogo from "../../assets/new-nacos-logo.png";
import unilorinLogo from "../../assets/unilorin-logo.svg";
import {BsInstagram, BsTwitter} from "react-icons/bs";
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
        url: "https://www.instagram.com/nacos_unilorin/",
    },
    // {
    //   name: "linkedin",
    //   icon: <BsLinkedin />,
    //   url: "#",
    // },
    // {
    //   name: "facebook",
    //   icon: <BsFacebook />,
    //   url: "#",
    // },
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

                <aside>© 2022/2023 NACOS. All rights reserved.</aside>
            </div>
        </footer>
    );
};

export default Footer;
