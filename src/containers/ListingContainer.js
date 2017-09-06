import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { fetchListing } from "../actions/listingActions"

import "../styles/ImageWrapper.css";
import Listing from "../components/Listing/Listing"
import ImageWrapper from "../components/ImageWrapper/ImageWrapper"

class ListingContainer extends Component {

    componentWillMount() {
      console.log("listing fetch fired")
      this.props.fetchListing();
    }

    render() {
      const fetched = this.props.fetched;
      const oneListing = this.props.listing[0];
      console.log(oneListing);

      return (
        <div>
          {fetched ? (
            <div>
              <ImageWrapper listing={oneListing}/>
              <div className="container main-container">
                <div className="row">
                  <div className="col-md-8 listing-column">
                    <Listing listing={oneListing}/>
                    <HostContainer />
                    <Reviews />
                  </div>
                  <div className="col-md-4 booking-column">
                    <BookingContainer />
                  </div>
                </div>
              </div>
            </div>
          ) : ( <div></div> )}
        </div>
      )
    }
}


const mapStateToProps = (state, ownProps) => {
  return {
    fetched: state.listing.fetched,
    listing: state.listing.listing,
    oneListing: ownProps.listing
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchListing: fetchListing
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(ListingContainer);
