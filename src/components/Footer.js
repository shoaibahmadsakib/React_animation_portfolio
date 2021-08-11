import React,{useState,useEffect} from "react";
import "../css/Footer.css";
import instagrame from "../assets/instagram.png";
import fb from "../assets/Path 1205.png";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Button from '@material-ui/core/Button';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
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
            <img src={fb} alt="" />
            <img src={instagrame} alt="" />
            <img src={fb} alt="" />
          </div>
        </div>
        <div className="section_section">
          <h4>QUICK ACCESS</h4>
          <a href="http://">home</a>
          <a href="http://">about</a>
          <a href="http://">portfolio</a>
          <a href="http://">contact</a>
        </div>
        <div className="third_section">
          <h4>CONTACT ME</h4>
          <p>2049r</p>
          <p>2049r</p>
          <p>2049r</p>
        </div>

        <div className="scroll-to-top">
          {isVisible && (
            <div onClick={scrollToTop}>
              <Button color="secondary"><ArrowDropUpIcon 
              style={{fontSize:"70px", color:'white'}}/></Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
