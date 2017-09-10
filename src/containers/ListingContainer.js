import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { fetchAll } from "../actions/asyncActions";

import "../styles/ImageWrapper.css";
import "../styles/Listing.css";
import "../styles/Booking.css";
import "../styles/SimilarListings.css";

import ImageWrapper from "../components/ImageWrapper/ImageWrapper";
import Listing from "../components/Listing/Listing";
import HostContainer from "./HostContainer";
import StickyWrapper from "./StickyWrapper";
import ReviewsContainer from "./ReviewsContainer";
import SimilarListingsContainer from "./SimilarListingsContainer";


class ListingContainer extends Component {

  componentWillMount() {
    console.log("listing fetch fired")
    this.props.fetchAll();
  }

  render() {

    const fetchedListing = this.props.fetchedListing;
    const fetchedHost = this.props.fetchedHost;
    const oneListing = this.props.listing[0];
    const oneHost = this.props.host[0];


    if (!fetchedHost || !fetchedListing) {
      return null
    }

    return (
      <div>
        <ImageWrapper listing={oneListing}/>
        <div className="container main-container">
          <div className="row main-row">
            <div className="col-md-8 listing-column">
              <Listing
                listing={oneListing}
                host={oneHost}
              />
              <ReviewsContainer />
              <HostContainer host={oneHost} />
            </div>
            <div className="col-md-4 booking-column">
              <StickyWrapper
                host={oneHost}
                listing={oneListing}
              />
            </div>
          </div>
            <SimilarListingsContainer
              listing={oneListing}
              host={oneHost}
            />
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    fetchedListing: state.async.fetchedListing,
    fetchedHost: state.async.fetchedHost,
    listing: state.async.listing,
    host: state.async.host,
    oneListing: ownProps.listing,
    oneHost: ownProps.host,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchAll: fetchAll,
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(ListingContainer);
