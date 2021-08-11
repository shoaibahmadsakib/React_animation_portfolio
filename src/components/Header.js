import React from "react";
import "../css/style.css";
import Button from "@material-ui/core/Button";
import{ MotionStyle, MotionStyle2} from "./Motion/MotionStyle";
import Type from "./Type/Type";

const Header = () => {
  return (
    <div className="top_Header">
      <div className="header_two_part">
        <div className="header_textpart">
          <h1>hi, this is Shoaib</h1>
          <div className="type_style">
            <Type />
          </div>
          <Button size="large" style={{zIndex:3}} variant="contained" color="secondary">
            CONTACT ME
          </Button>
        </div>
        <div className="header_animation_part">
          <MotionStyle className="circle1" />
          <MotionStyle className="squire1" />
          <MotionStyle className="tringle1" />
          <MotionStyle className="circle2" />
          <MotionStyle2 className="squire2" />
          <MotionStyle className="tringle2" />
          <MotionStyle2 className="circle3" />
          <MotionStyle className="squire3" />
          <MotionStyle2 className="circle4" />
        </div>
      </div>
    </div>
  );
};

export default Header;
