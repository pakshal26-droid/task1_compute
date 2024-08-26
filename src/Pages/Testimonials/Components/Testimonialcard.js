import React from "react";
import "../Styles/testimonialcard.css";
import e1 from "/Users/Pakshal/Desktop/PROJECTS/COMPUTETASK1/travel-app/src/Pages/folderimages/Ellipse 25.png";
import e2 from "/Users/Pakshal/Desktop/PROJECTS/COMPUTETASK1/travel-app/src/Pages/folderimages/Ellipse 26.png";
import e3 from "/Users/Pakshal/Desktop/PROJECTS/COMPUTETASK1/travel-app/src/Pages/folderimages/Ellipse 28.png";
import Tsidecard from "./Tsidecard";

function Testimonialcard() {
  return (
    <div className="testimonial-div">
      <div className="testimonial-content">
        <h2>Testimonials</h2>
        <h1>What people say about Us.</h1>
        <div className="dots">
          <img src={e1} alt="" />
          <img src={e2} alt="" />
          <img src={e3} alt="" />
        </div>
      </div>
      <div className="testimonial-card">
        <Tsidecard />
      </div>
    </div>
  );
}

export default Testimonialcard;
