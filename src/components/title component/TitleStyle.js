import React from "react";
import ThreeBar from "../../assets/3 bar.svg";
import "../../css/titlestyle/Titlestyle.css"


const TitleStyle = (props) => {
  return (
    <div className="Title_style">
      <h1>
       {props.children}
      </h1>
      <img className="three_bar" src={ThreeBar} alt="" />
    </div>
  );
};

export default TitleStyle;
