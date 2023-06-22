import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import video from "../assets/vide.mp4";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted />

      <h1>ADVENTURE AWAITS</h1>
      <h3>@ Hikers Club</h3>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Link to="contact">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Enquiry
          </Button>
        </Link>
        <Link to="">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Join Whatsapp Group <BsWhatsapp />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
