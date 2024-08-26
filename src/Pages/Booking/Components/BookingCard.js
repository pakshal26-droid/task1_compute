import React from "react";
import "../Styles/booking.css";

function BookingCard(props) {
  return (
    <div>
      <div className="booking-list-item">
        <div className="b-list-img">
          <img src={props.img} alt="" />
        </div>
        <div className="b-list-text">
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;
