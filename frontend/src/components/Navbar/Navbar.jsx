import { useState } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

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
  //state to keep track of the scroll position.
  const [scrolled, setScrolled] = useState(false);

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
    <header className={scrolled ? "scrolled" : ""}>
      <Link to={"/"}>
        <div>
          <img src="/src/assets/nacos-logo.svg" alt="" />
          <img src="/src/assets/unilorin-logo.svg" alt="" />
        </div>
      </Link>
      <nav>
        {/* Mapping over the links array and generating individual links 
        The key for each link is it's title  */}
        {links.map((link) => (
          <NavLink to={link.path} key={link.title} end>
            {link.title}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
