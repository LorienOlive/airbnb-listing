import React, { Component } from "react";

import ListingMenu from "./ListingMenu";
import ListingHeader from "./ListingHeader";
import AboutBody from "./AboutBody";
import Details from "./Details/Details";

const Listing = ({ listing, host }) => (
  <div>
    <ListingMenu listing={listing} />
    <ListingHeader host={host}
      listing={listing}
    />
    <AboutBody listing={listing} />
    <Details listing={listing} />
  </div>
)


export default Listing;
