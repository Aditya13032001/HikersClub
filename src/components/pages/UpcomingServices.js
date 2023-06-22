import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";

import CardItem from "../CardItem";
import korigad from "../../assets/korigad.jpg";
import kalsubai from "../../assets/kalsubai.jpeg";
import sandhan from "../../assets/sandhan.jpg";
import devkund from "../../assets/devk.jpeg";
import rajgad from "../../assets/rajg.jpg";
import "./Upcoming.css";

export default function Services() {
  return (
    <div className="upcoming" name="cardd">
      <h1 className="header">Upcoming Monsoon Treks</h1>
      <div className="upcoming__container">
        <div className="upcoming__wrapper">
          <ul className="upcoming__items">
            <CardItem src={korigad} text="30 July" label="Korigad" />
            <CardItem
              src={kalsubai}
              text="Yet to be Announced"
              label="Kalsubai"
            />
            <CardItem src={sandhan} text="1 August" label="sandhan Valley" />
            <CardItem src={devkund} text="22 August" label="Devkund " />
            <CardItem src={rajgad} text="Yet to be Announced" label="Rajgad" />
          </ul>
          <div className="btnss">
            <Link to="/contact">
              <Button buttonStyle="btn--primary" buttonSize="btn--large">
                Enquiry
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
