import { useState } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  // An array which contains link objects.
  // This makes it easier to add/remove links without having to tamper with existing markup
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Events",
      path: "/events",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Opportunities",
      path: "/Opportunities",
    },
    // {
    //   title: "CGPA Calculator",
    //   path: "/calculator",
    // },
  ];

  //state to keep track of the scroll position.
  const [scrolled, setScrolled] = useState(false);
  const [isMobileNavActive, setMobileNavAvtive] = useState(false);
  // function to toggle state when scrolled
  const toggle = () => {
    if (window.scrollY > 40) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  window.addEventListener("scroll", toggle);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <Link className="header-nav-home" to={"/"}>
        <div className="header-nav-logo">
          <img
            src="/src/assets/new-nacos-logo.png"
            style={{ width: "auto", height: "75px" }}
            alt=""
          />
          <img src="/src/assets/unilorin-logo.svg" alt="" />
        </div>
      </Link>
      <button
        className="header-toggle"
        onClick={() => setMobileNavAvtive(!isMobileNavActive)}
      >
        <FaBars />
      </button>
      <nav className={`header-nav ${isMobileNavActive ? "active" : ""}`}>
        <div className="header-nav-links">
          {links.map((link) => (
            <NavLink
              className={"header-nav-link"}
              onClick={() => setMobileNavAvtive(!isMobileNavActive)}
              to={link.path}
              key={link.title}
              end
            >
              {link.title}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
