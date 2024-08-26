import React from "react";
import "../Styles/testimonialcard.css";
import man from "/Users/Pakshal/Desktop/PROJECTS/COMPUTETASK1/travel-app/src/Pages/folderimages/man.png";

function Tsidecard() {
  return (
    <div className="tsidecard-div">
      <div className="tsidecard-img">
        <img src={man} alt="" />
      </div>
      <div className="tsidecard-content">
        <p>
          “On the Windows talking painted pasture yet its express parties use.
          Sure last upon he same as knew next. Of believed or diverted no.”
        </p>
        <h2>Mike taylor</h2>
        <h4>Lahore, Pakistan</h4>
      </div>
    </div>
  );
}

export default Tsidecard;
