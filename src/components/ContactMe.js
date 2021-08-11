import React from "react";
import "../css/ContactMe.css";

import TitleStyle from "./title component/TitleStyle";
const ContactMe = () => {
  return (
    <div className="contact_me">
      <TitleStyle>CONTACT ME</TitleStyle>

      <div className="form_header">
        <div className="form_inside">
          <h3>FILL THE FORM</h3>
          <form action="" className="form_style">
            <input type="text" placeholder="input your name" />
            <input type="text" placeholder="input your email" />
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
