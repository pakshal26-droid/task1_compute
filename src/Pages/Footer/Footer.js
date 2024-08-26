import React from "react";
import "./Styles/footer.css";
import Footericons from "./Components/Footericons";

function Footer() {
  return (
    <>
      <div>
        <div className="footer-div">
          <div className="footer-title">
            <h1>Jadoo</h1>
            <p>Book your trip in minute, get full Control for much longer.</p>
          </div>
          <div className="footer-items">
            <h2>Company</h2>
            <div className="footer-p">
              <p>About</p>
              <p>Careers</p>
              <p>Mobile</p>
            </div>
          </div>
          <div className="footer-items">
            <h2>Company</h2>
            <div className="footer-p">
              <p>About</p>
              <p>Careers</p>
              <p>Mobile</p>
            </div>
          </div>
          <div className="footer-items">
            <h2>Company</h2>
            <div className="footer-p">
              <p>About</p>
              <p>Careers</p>
              <p>Mobile</p>
            </div>
          </div>
          <Footericons />
        </div>
      </div>
      <p className="copyright">All rights reserved@pakshal.co</p>
    </>
  );
}

export default Footer;
