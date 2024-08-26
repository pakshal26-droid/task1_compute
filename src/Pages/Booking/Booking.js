import React from "react";
import "./Styles/booking.css";
import g1 from "/Users/Pakshal/Desktop/PROJECTS/COMPUTETASK1/travel-app/src/Pages/folderimages/Group 7.png";
import g2 from "/Users/Pakshal/Desktop/PROJECTS/COMPUTETASK1/travel-app/src/Pages/folderimages/Group 11.png";
import g3 from "/Users/Pakshal/Desktop/PROJECTS/COMPUTETASK1/travel-app/src/Pages/folderimages/Group 12.png";
import BookingCard from "./Components/BookingCard";
import SideCard from "./Components/sideCard.js";

function Booking() {
  return (
    <>
      <div className="booking-div">
        <div className="booking-text-section">
          <h2>Easy and Fast</h2>
          <h1>Book your next trip in 3 easy steps</h1>
          <div className="imp-section">
            <BookingCard
              img={g1}
              title="Choose Destination"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus."
            />
            <BookingCard
              img={g2}
              title="Make Payment"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus."
            />
            <BookingCard
              img={g3}
              title="Reach Airport on Selected Date"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus."
            />
          </div>
        </div>

        <div className="booking-card-section">
          <SideCard />
        </div>
      </div>
    </>
  );
}

export default Booking;
