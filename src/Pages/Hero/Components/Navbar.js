import React from "react";
import "../Styles/navbar.css";
import logo from "/Users/Pakshal/Desktop/PROJECTS/COMPUTETASK1/travel-app/src/Pages/folderimages/Logo.png";

function Navbar() {
  return (
    <>
      <div className="navbar-div">
        <div className="nav-logo">
          <img src={logo} alt="" srcset="" />
        </div>
        <div className="nav-links">
          <ul>
            <li>Destination</li>
            <li>Hotels</li>
            <li>FLights</li>
            <li>Bookings</li>
            <li>Login</li>
            <li>Signup</li>
            <li>EN</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
