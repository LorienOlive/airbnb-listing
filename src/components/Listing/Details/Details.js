import React, { Component } from 'react';

import Amenities from "./Amenities";
import Prices from "./Prices";
import SleepingArrangements from "./SleepingArrangements";
import HouseRules from "./HouseRules";
import Cancellations from "./Cancellations";
import Safety from "./Safety";
import Availability from "./Availability";

const Details = ({ listing }) => (
  <div className="container details-container">
    <Amenities listing={listing} />
    <Prices listing={listing} />
    <SleepingArrangements listing={listing} />
    <HouseRules listing={listing} />
    <Cancellations listing={listing} />
    <Safety listing={listing} />
    <Availability listing={listing} />
  </div>
)

export default Details;
