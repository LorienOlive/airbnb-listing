import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { fetchAll } from "../actions/asyncActions";
import { showContent } from "../actions/listingActions";

import "../styles/ImageWrapper.css";
import "../styles/Listing.css";
import "../styles/Booking.css"

import ImageWrapper from "../components/ImageWrapper/ImageWrapper";
import Listing from "../components/Listing/Listing";
import HostContainer from "./HostContainer";
import StickyWrapper from "./StickyWrapper";


class ListingContainer extends Component {

  componentWillMount() {
    console.log("listing fetch fired")
    this.props.fetchAll();
  }

  showMoreAmen = (e) => {
      e.preventDefault
      this.props.showContent();
  }

  render() {

    const fetched = this.props.fetched;
    const oneListing = this.props.listing[0];
    const oneHost = this.props.host[0];


    if (!fetched) {
      return null
    }

    return (
      <div>
        <ImageWrapper listing={oneListing}/>
        <div className="container main-container">
          <div className="row">
            <div className="col-md-8 listing-column">
              <Listing listing={oneListing}
                host={oneHost}
              />
              <HostContainer host={oneHost} />
              {/* <Reviews /> */}
            </div>
            <div className="col-md-4 booking-column">
              <StickyWrapper host={oneHost}
                listing={oneListing}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    fetched: state.async.fetched,
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
