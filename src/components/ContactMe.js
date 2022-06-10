import React, { useRef } from "react";
import "../css/ContactMe.css";
import { Button } from "@material-ui/core";
import TitleStyle from "./title component/TitleStyle";
import emailjs from '@emailjs/browser';
const ContactMe = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cbb26t8', 'template_wh3mdpe', form.current, 'TEgr7MsmrMM5zkXqN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact_me" id="contact">
      <TitleStyle>CONTACT ME</TitleStyle>
      <div className="form_header">
        <div className="form_inside">
          <h3>FILL THE FORM</h3>

          <form  ref={form} onSubmit={sendEmail} className="form_style">
            <input type="text" name="name" placeholder="input your name" />
            <input type="email" name="email" placeholder="input your email" />
            <textarea name="message" id="" cols="30" rows="10"></textarea>
            <button>click</button>
            {/* <Button
              variant="contained"
              color="primary"
              style={{ color: "white" }}
            >
              Submit
            </Button> */}
          </form>
         
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
