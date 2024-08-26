import React from "react";
import "../Styles/content.css";
import girlImage from "/Users/Pakshal/Desktop/PROJECTS/COMPUTETASK1/travel-app/src/Pages/folderimages/Image.png";

function Content() {
  return (
    <>
      <div className="content-section">
        <div className="content-div">
          <h2>Best Destinations around the world</h2>
          <h1>Travel, enjoy and live a new and full life</h1>
          <p>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="btn-div">
            <button className="btn1">Find Out Now</button>
            <button className="btn2"></button>
            <p>Play Demo</p>
          </div>
        </div>
        <div className="image-div">
          <img className="girl-img" src={girlImage} alt="" srcset="" />
        </div>
      </div>
    </>
  );
}

export default Content;
