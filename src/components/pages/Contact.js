import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact" name="cardd">
      <div class="login-box">
        <h2>Fill Details </h2>
        <form>
          <div class="user-box">
            <input type="text" />
            <label>Name</label>
          </div>
          <div class="user-box">
            <input type="phone" maxLength="10" />
            <label>Mobile</label>
          </div>
          <div class="user-box">
            <input type="email" />
            <label>Email</label>
          </div>
          <a href=" ">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </div>
  );
}

export default Contact;
