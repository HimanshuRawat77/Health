import React from "react";
import "./Results.css";
import familyImage from "../Images/family.png";
import lineImage from "../Images/line.png";

export default function Results() {
  return (
    <div className="results-content">
      <div className="header">
        <div className="heading-and-line">
          <div className="both">
            <div className="line-image">
              <img src={lineImage} alt="Line" />
            </div>
            <h1 className="heading">Your estimated IVF Success Rate is</h1>
          </div>
        </div>
      </div>

      <img src={familyImage} alt="Family" className="family-image" />
    </div>
  );
}
