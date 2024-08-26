import React from "react";
import "../Styles/footer.css";
import facebook from "/Users/Pakshal/Desktop/PROJECTS/COMPUTETASK1/travel-app/src/Pages/folderimages/Social.png";
import instagram from "/Users/Pakshal/Desktop/PROJECTS/COMPUTETASK1/travel-app/src/Pages/folderimages/Social-2.png";
import twitter from "/Users/Pakshal/Desktop/PROJECTS/COMPUTETASK1/travel-app/src/Pages/folderimages/Social-4.png";
import gplay from "/Users/Pakshal/Desktop/PROJECTS/COMPUTETASK1/travel-app/src/Pages/folderimages/Google Play.png";
import aplay from "/Users/Pakshal/Desktop/PROJECTS/COMPUTETASK1/travel-app/src/Pages/folderimages/Play Store.png";
function Footericons() {
  return (
    <div>
      <div className="footer-icons-div">
        <div className="social-icons">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
        </div>
        <p>Discover our app</p>
        <div className="stores-icon">
          <img src={gplay} alt="" />
          <img src={aplay} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footericons;
