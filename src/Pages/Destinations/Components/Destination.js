import React from "react";
import "../Styles/destination.css";

import DestinationCard from "./DestinationCard";

function Destination() {
  return (
    <div>
      <div className="destination-div">
        <h2>Top Selling</h2>
        <h1>Top Destinations</h1>
        <div className="destination-cards">
          <DestinationCard
            item_className="d-card-item-1"
            place="Rome, Italty"
            price="$5,42k"
            duration="10 Days"
          />
          <DestinationCard
            item_className="d-card-item-2"
            place="Rome, Italty"
            price="$5,42k"
            duration="10 Days"
          />
          <DestinationCard
            item_className="d-card-item-3"
            place="Rome, Italty"
            price="$5,42k"
            duration="10 Days"
          />
        </div>
      </div>
    </div>
  );
}

export default Destination;
