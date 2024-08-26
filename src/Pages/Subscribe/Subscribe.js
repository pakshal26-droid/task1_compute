import React from "react";
import "./Styles/subscribe.css";
import rect from "/Users/Pakshal/Desktop/PROJECTS/COMPUTETASK1/travel-app/src/Pages/folderimages/Rectangle 164.png";
import sendIcon from "/Users/Pakshal/Desktop/PROJECTS/COMPUTETASK1/travel-app/src/Pages/folderimages/sendicon.png";
function Subscribe() {
  return (
    <>
      <div className="subscribe-div">
        {/* <div className="s-bg"></div> */}
        <div className="subscribe-text">
          <h1>
            Subscribe to get information, latest news and other <br />{" "}
            interesting offers about Jadoo
          </h1>
        </div>
        <div className="subscribe-input">
          <input type="text" placeholder="Email" />
          <button>Subscribe</button>
        </div>
        <div className="subscribe-icon">
          <img src={sendIcon} alt="" />
        </div>
      </div>
    </>
  );
}

export default Subscribe;
