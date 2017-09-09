import React, { Component } from 'react';

import Amenities from "./Amenities";
import Prices from "./Prices";
// import SleepingArrangements from "./SleepingArrangements";
// import HouseRules from "./HouseRules";
// import Cancellations from "./Cancellations";
// import SafetyRules from "./SafetyRules";
// import Availability from "./Availability";

const Details = ({ listing }) => (
  <div className="container details-container">
    <Amenities listing={listing} />
    <Prices listing={listing} />
    {/* <SleepingArrangements listing={listing} />
    <HouseRules listing={listing} />
    <Cancellations listing={listing} />
    <SafetyRules listing={listing} />
    <Availability listing={listing} /> */}
  </div>
)

export default Details;
