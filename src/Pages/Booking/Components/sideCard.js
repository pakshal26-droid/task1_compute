import React from "react";
import "../Styles/sidecard.css";
import leaf from "/Users/Pakshal/Desktop/PROJECTS/COMPUTETASK1/travel-app/src/Pages/folderimages/leaf.png";
import map from "/Users/Pakshal/Desktop/PROJECTS/COMPUTETASK1/travel-app/src/Pages/folderimages/map.png";
import send from "/Users/Pakshal/Desktop/PROJECTS/COMPUTETASK1/travel-app/src/Pages/folderimages/send.png";
import bldg from "/Users/Pakshal/Desktop/PROJECTS/COMPUTETASK1/travel-app/src/Pages/folderimages/building 1.png";
import heart from "/Users/Pakshal/Desktop/PROJECTS/COMPUTETASK1/travel-app/src/Pages/folderimages/heart.png";
function SideCard() {
  return (
    <div className="sidecard">
      <div className="image"></div>
      <div className="content">
        <div className="content-header">
          <div className="content-text">
            <h1>Trip To Greece</h1>
            <p>14-19 June | by Robbin joseph</p>
            <div className="icons-div">
              <div className="icon">
                <img src={leaf} alt="" />
              </div>
              <div className="icon">
                <img src={map} alt="" />
              </div>
              <div className="icon">
                <img src={send} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="content-footer">
          <img className="bldg" src={bldg} alt="" />
          <p>24 People Going</p>
          <div className="heart-icon">
            <img src={heart} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideCard;
