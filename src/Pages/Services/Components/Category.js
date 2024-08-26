import React from "react";
import "../Styles/category.css";
import g48 from "/Users/Pakshal/Desktop/PROJECTS/COMPUTETASK1/travel-app/src/Pages/folderimages/Group 48.png";
import g49 from "/Users/Pakshal/Desktop/PROJECTS/COMPUTETASK1/travel-app/src/Pages/folderimages/Group 49.png";
import g50 from "/Users/Pakshal/Desktop/PROJECTS/COMPUTETASK1/travel-app/src/Pages/folderimages/Group 50.png";
import g51 from "/Users/Pakshal/Desktop/PROJECTS/COMPUTETASK1/travel-app/src/Pages/folderimages/Group 51.png";

function Category() {
  return (
    <>
      <div className="category-div">
        <h2>Category</h2>
        <h1>We Offer Best Services</h1>
        <div className="category-cards">
          <div className="c-card-item">
            <img src={g48} alt="" />
            <h3>Calculated Weather </h3>
            <p>Built Wicket longer admire do barton vanity itself do in it.</p>
          </div>
          <div className="c-card-item">
            <img src={g51} alt="" />
            <h3>Best Flights</h3>
            <p>Engrossed listening. Park gate sell they west hard for the.</p>
          </div>
          <div className="c-card-item">
            <img src={g50} alt="" />
            <h3>Local Events</h3>
            <p>
              Barton vanity itself do in it. Preferd to men it engrossed
              listening.
            </p>
          </div>
          <div className="c-card-item">
            <img src={g49} alt="" />
            <h3>Customization</h3>
            <p>
              We deliver outsourced aviation services for military customers
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
