import React, { Component } from "react";

import ListingMenu from "./ListingMenu";
import ListingHeader from "./ListingHeader";
import AboutBody from "./AboutBody";

const Listing = ({ listing, host, showMore, showMoreAbout, initStyle, expandStyle }) => (
  <div>
    <ListingMenu listing={listing} />
    <ListingHeader host={host}
      listing={listing} />
    <AboutBody listing={listing}
      initStyle={initStyle}
      expandStyle={expandStyle}
      showMore={showMore}
      showMoreAbout={showMoreAbout} />
    {!showMore ? (
      <div>
        <a className="show-more" onClick={showMoreAbout}>+ More</a>
      </div>
    ) : ( null )}
  </div>
)


export default Listing;
