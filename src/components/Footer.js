import React, { useState, useEffect } from "react";
import "../css/Footer.css";

import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import Button from "@material-ui/core/Button";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="footer_image">
      <div className="footer_three_section">
        <div className="first_section">
          <h1>
            <strong>S</strong>HOAIB AHMAD
          </h1>
          <h3>STAY IN TOUCH</h3>
          <div className="social_icon">
            <Button href="https://github.com/shoaibahmadsakib">
              <FacebookIcon style={{ color: "white" }} />
            </Button>
            <Button href="https://www.facebook.com/shoaibahmadsakib123">
              <LinkedInIcon style={{ color: "white" }} />
            </Button>
            <Button href="www.linkedin.com/in/shoaib-ahmad-sakib-a0376a191">
              <GitHubIcon style={{ color: "white" }} />
            </Button>
          </div>
        </div>
        <div className="section_section">
          <h4>QUICK ACCESS</h4>
          <a href="">home</a>
          <a href="">about</a>
          <a href="">portfolio</a>
          <a href="">contact</a>
        </div>
        <div className="third_section">
          <h4>CONTACT ME</h4>
          <p>number: +008 01763430682</p>
          <p>2049r</p>
          <p>2049r</p>
        </div>

        <div className="scroll-to-top">
          {isVisible && (
            <div onClick={scrollToTop}>
              <Button color="secondary">
                <ArrowDropUpIcon style={{ fontSize: "70px", color: "white" }} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
