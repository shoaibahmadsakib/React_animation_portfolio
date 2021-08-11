import React from "react";
import "../css/about.css";
import myImage from "../assets/myphoto.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";

const About = () => {
  return (
    <div className="about_me" id="about">
      <div className="about_two_section">
        <div className="my_photo">
          <img src={myImage} alt="myPhoto" />
        </div>
        <div className="my_describtion">
          <h1>about me</h1>
          <p>
            Hello sir, I am a professional UI designer and react js developer. I
            am fully expert in adobe xd, adobe photoshop figma for mobile and
            web UI design. I can design a Landing page, Admin page, Dashboard,
            and so many other designs with many new sources and beautiful modern
            design. You can hire me with a small amount
          </p>
        </div>
      </div>
      <div className="about_two_section">
        <div className="my_describtion">
          <h1>Figma Project</h1>
          <p>
          Hello sir, I am a professional UI designer.This is a simple design with Figma. I have many figma design
          </p>
        </div>
        <div className="my_photo">
          <img src={image1} alt="myPhoto" />
        </div>
      </div>
      <div className="about_two_section">
        <div className="my_photo">
          <img src={image2} alt="myPhoto" />
        </div>
        <div className="my_describtion">
          <h1>XD</h1>
          <p>
            Hello sir, I am a professional UI designer.This is a simple design with Figma
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
