import React, { Component } from "react";

import SimilarListings from "../components/Similar/SimilarListings"
import MoreOptions from "../components/Similar/MoreOptions"

class SimilarListingsContainer extends Component {

  render() {
    const listing = this.props.listing;
    const host = this.props.host;
    console.log(listing);
    return (
      <div className="container similar-container">
        <h2 className="similar-header">Similar listings</h2>
          <SimilarListings listing={listing} />
          <MoreOptions
            listing={listing}
            host={host}
          />
      </div>
    )
  }
}

export default SimilarListingsContainer;
