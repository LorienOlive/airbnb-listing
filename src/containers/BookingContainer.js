import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import "../styles/Booking.css"

import BookingForm from "../components/Booking/BookingForm";

class BookingContainer extends Component {



  render() {
    const host = this.props.host[0];
    const listing = this.props.listing[0];
    console.log(listing)
    return (
      <div className="booking-container">
        <div className="booking-header"><span>${listing.description.prices.price}</span> per night</div>
        <BookingForm listing={listing}
                     host={host} />
        {/* <SaveButtonBox /> */}
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
