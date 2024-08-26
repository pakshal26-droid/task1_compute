import React from "react";
import axon from "/Users/Pakshal/Desktop/PROJECTS/COMPUTETASK1/travel-app/src/Pages/folderimages/image 27.png";
import jetstar from "/Users/Pakshal/Desktop/PROJECTS/COMPUTETASK1/travel-app/src/Pages/folderimages/image 28.png";
import expedia from "/Users/Pakshal/Desktop/PROJECTS/COMPUTETASK1/travel-app/src/Pages/folderimages/image 29.png";
import qantas from "/Users/Pakshal/Desktop/PROJECTS/COMPUTETASK1/travel-app/src/Pages/folderimages/image 30.png";
import italia from "/Users/Pakshal/Desktop/PROJECTS/COMPUTETASK1/travel-app/src/Pages/folderimages/image 31.png";
import "../Styles/testimonialcard.css";
function Brands() {
  const image = [axon, jetstar, expedia, qantas, italia];
  return (
    <div>
      <div className="brands-div">
        <div className="brand-img">
          <div className="item-div">
            {image.map((img) => {
              return (
                <div className="img-item">
                  <img src={img} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
