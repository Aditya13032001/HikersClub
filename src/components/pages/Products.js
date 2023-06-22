import React from "react";
import "./Products.css";
import Gear from "../Gear";

export default function Products() {
  return (
    <div className="products">
      <h1 className="header">Rent Gear</h1>

      <div className="gear-container" name="gear">
        <Gear />
      </div>
    </div>
  );
}
