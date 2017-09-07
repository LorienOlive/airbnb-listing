import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { fetchAll } from "../actions/asyncActions";
import { showContent } from "../actions/listingActions";

import "../styles/ImageWrapper.css";
import "../styles/Listing.css";

import ImageWrapper from "../components/ImageWrapper/ImageWrapper";
import Listing from "../components/Listing/Listing";
import HostContainer from "./HostContainer";


class ListingContainer extends Component {

  componentWillMount() {
    console.log("listing fetch fired")
    this.props.fetchAll();
  }

  showMoreAbout = (e) => {
    e.preventDefault
    this.props.showContent();
  }

  render() {

    const initStyle = {
      height: "177px",
      overflowY: "hidden"
    }

    const expandStyle = {
      height: "auto"
    }

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
                showMore={this.props.showMore}
                showMoreAbout={this.showMoreAbout}
                initStyle={initStyle}
                expandStyle={expandStyle} />
              <HostContainer host={oneHost} />
              {/* <Reviews /> */}
            </div>
            <div className="col-md-4 booking-column">
              {/* <BookingContainer /> */}
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
    showMore: state.listing.showMore,
    oneListing: ownProps.listing,
    oneHost: ownProps.host,
    initStyle: ownProps.initStyle,
    expandStyle: ownProps.expandStyle
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchAll: fetchAll,
    showContent: showContent,
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(ListingContainer);
