import React from "react";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import "../Hero/Styles/hero.css";

function Hero() {
  return (
    <>
      <div className="contents">
        <Navbar />
        <Content />
      </div>
    </>
  );
}

export default Hero;
