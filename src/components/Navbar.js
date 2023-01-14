import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import myLogo from "../assets/mylogo.png";
import "../css/Navbar.css";
import scrollTo from "gatsby-plugin-smoothscroll";
import ToggleFunction from "./Theme/ToggleTheme";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [hamberger, setHambarger] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  // const [css, setCss] = useState({

  // })

  const clickHandler = () => {
    setShow(!show);
    setHambarger(!hamberger);
  };

  //////////////////
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 120) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // window.onResize =
  });

  let navbarClasses = ["nav_bar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  // resize

  return (
    <div className={navbarClasses.join(" ")}>
      <div className="nav_part1">
        <Link to="/">
          <img src={myLogo} alt="logo" />
        </Link>
      </div>
      <div className={show ? "nav_part2 close" : "nav_part2"}>
        <Link to="/" onClick={() => scrollTo("#home")}>
          Home
        </Link>
        <Link to="/" onClick={() => scrollTo("#about")}>
          About
        </Link>

        <Link to="/" onClick={() => scrollTo("#skill")}>
          my skill
        </Link>

        <Link to="/" onClick={() => scrollTo("#portfolio")}>
          my portfolio
        </Link>
        <Link to="/" onClick={() => scrollTo("#contact")}>
          Contact
        </Link>
        <Link to="/aboutme" onClick={() => scrollTo("#contact")}>
          Aboutme
        </Link>
        <ToggleFunction />
      </div>
      <div
        className="hambarer"
        style={{
          zIndex: 1,
        }}
      >
        <i
          onClick={clickHandler}
          className={hamberger ? "fas fa-hamburger" : "fas fa-times"}
          style={{ fontSize: "29px", color: "#fff" }}
        ></i>
      </div>
    </div>
  );
};

export default Navbar;
