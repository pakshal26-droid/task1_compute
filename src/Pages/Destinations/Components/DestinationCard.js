import React from "react";
import "../Styles/destination.css";

function DestinationCard(props) {
  return (
    <div>
      <div className={props.item_className}>
        <div className="card-info">
          <div className="info-text">
            <p className="trip-p">{props.place}</p>
            <p className="trip-p">{props.price}</p>
          </div>
          <p className="trip-days">{props.duration}</p>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;
