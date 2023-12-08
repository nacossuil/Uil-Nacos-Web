import { useState, createRef } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa6'


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
    {
      title: "CGPA Calculator",
      path: "/calculator",
    },
  ];

  const menuRef = createRef(null);

  function toggleMenu() {
    if (menuRef.current) {
      const menuState = menuRef.current.getAttribute("aria-expanded");
      menuState === "true"
        ? menuRef.current.setAttribute("aria-expanded", "false")
        : menuRef.current.setAttribute("aria-expanded", "true");
    }
  }
  //state to keep track of the scroll position.
  const [scrolled, setScrolled] = useState(false);
  const [isMobileNavActive, setMobileNavAvtive] = useState(false)
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
          <img src="/src/assets/nacos-logo.svg" alt="" />
          <img src="/src/assets/unilorin-logo.svg" alt="" />
        </div>
      </Link>
      <button className="header-toggle" onClick={() => setMobileNavAvtive(!isMobileNavActive)}>
        <FaBars />
      </button>
      <nav className={`header-nav ${isMobileNavActive ? "active" : ""}`}>
        <div className="header-nav-links">

          {links.map((link) => (
            <NavLink className={"header-nav-link"} onClick={() => setMobileNavAvtive(!isMobileNavActive)} to={link.path} key={link.title} end>
              {link.title}
            </NavLink>
          ))}
        </div>
      </nav>
      <button onClick={toggleMenu} className="toggle">
        {/* <span>menu</span> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </button>
    </header>
  );
};

export default Navbar;
