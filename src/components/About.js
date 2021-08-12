import React from "react";
import "../css/about.css";
// from assets
import myImage from "../assets/myphoto.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";

const AboutMe = [
  {
    className: "about_two_section",
    Image: myImage,
    Heading: "about me",
    describtion:
      "Hello sir, I am a professional UI designer and react js developer. I am fully expert in adobe xd, adobe photoshop figma for mobile and web UI design. I can design a Landing page, Admin page, Dashboard, and so many other designs with many new sources and beautiful modern design. You can hire me with a small amount",
  },
  {
    className: "about_two_section_reverse",
    Image: image1,
    Heading: "Figma Project",
    describtion:
      "  Hello sir, I am a professional UI designer.This is a simple design with Figma. I have many figma design",
  },
  {
    className: "about_two_section",
    Image: image2,
    Heading: "Figma Project",
    describtion:"Hello sir, I am a professional UI designer.This is a simple design with Figma. I have many figma design",
  },
];

const About = () => {
  return (
    <div className="about_me" id="about">
      {AboutMe.map((myself) => (
        <div className={myself.className}>
          <div className="my_photo">
            <img src={myself.Image} alt="myPhoto" />
          </div>
          <div className="my_describtion">
            <h1>{myself.Heading}</h1>
            <p>{myself.describtion}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
