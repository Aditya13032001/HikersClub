import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import KW from "../assets/KW.jpg";
import HF from "../assets/HF.jpg";
import Rajgad from "../assets/rajgad.jpg";
import ds from "../assets/ds.jpg";
import hari from "../assets/hari.jpg";

function Cards() {
  return (
    <div className="cards" name="cardd">
      <h1>Recent Treks</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={HF}
              text="Explore the hidden Caves near HarishChandra Fort "
              label="HarishChandra Fort"
              path="/services"
            />
            <CardItem
              src={KW}
              text="Visit Kataldhar Waterfall during Any Season"
              label="Kataldhara Waterfall"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={Rajgad}
              text="The Pride of Marathas"
              label="Rajgad Fort"
              path="/services"
            />
            <CardItem
              src={ds}
              text="Visit to Sea of Milk."
              label="Dudhsagar"
              path="/products"
            />
            <CardItem
              src={hari}
              text=" Harihar fort trek near Nashik during monsoon and post-rainy season. "
              label="HariHar"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
