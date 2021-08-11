import React from "react";
import ThreeBar from "../assets/3 bar.svg";
import ReactImg from "../assets/Icon awesome-react.png";
import Xd from "../assets/Icon simple-adobexd.png";
import Js from "../assets/Icon awesome-js-square.png";
import redux from "../assets/Icon simple-redux.png";
import css from "../assets/Icon awesome-css3.png";
import bootstrap from "../assets/Icon awesome-bootstrap.png";
import "../css/technology.css";
import TitleStyle from "./title component/TitleStyle";
const Techonology = () => {
  return (
    <div className="technology_i_use">
      <TitleStyle>TECHNOLOGY I USE</TitleStyle>

      <div className="image_primid">
        <div className="firstline">
          <img src={ReactImg} alt="" />
        </div>
        <div className="secondline">
          <img src={Xd} alt="" />
          <img src={Js} alt="" />
        </div>
        <div className="thirdline">
          <img src={redux} alt="" />
          <img src={css} alt="" />
          <img src={bootstrap} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Techonology;
