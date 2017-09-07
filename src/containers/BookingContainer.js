import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import "../styles/Booking.css"

import BookingForm from "../components/BookingForm";

class BookingContainer extends Component {



  render() {
    const host = this.props.host;
    const listing = this.props.listing;

    return (
      <div className="container booking-container">
        <div className="booking-header">{listing.price}</div>
        <BookingForm />
        <SaveButtonBox />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    fetched: state.async.fetched,
    listing: state.async.listing,
    host: state.async.host,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingContainer);
