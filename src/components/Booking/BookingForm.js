import React, { Component } from "react";
import { SingleDatePicker,
  SingleDatePickerShape,
  HORIZONTAL_ORIENTATION,
  ANCHOR_LEFT,
} from "react-dates";
import moment from "moment";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getCheckInDate, getCheckOutDate, addGuest, removeGuest } from "../../actions/bookingActions";

import "react-dates/lib/css/_datepicker.css";

import CheckIn from "./CheckIn"
import CheckOut from "./CheckOut"
import GuestDropdown from "./GuestDropdown";
import CalcTotals from "./CalcTotals";


class BookingForm extends Component {

  render() {

    const focused = this.props.focused;
    const date = this.props.date;
    const host = this.props.host;

    return (
      <div className="card form-container">
        <div className="container datepicker-container">
          <div className="row datepicker-row">
            <div className="col-md-6 check-date">
              <label className="booking-checkin-label" htmlFor="checkin">Check In</label>
              <CheckIn listing={this.props.listing}
                getCheckInDate={this.props.getCheckInDate}
              />
            </div>
            <div className="col-md-6 check-date">
              <label className="booking-checkout-label" htmlFor="checkout">Check Out</label>
              <CheckOut listing={this.props.listing}
                getCheckOutDate={this.props.getCheckOutDate}
                checkInDate={this.props.checkInDate}
                setCheckIn={this.props.setCheckIn}
              />
            </div>
          </div>
          <div className="guest-dropdown-container">
            <GuestDropdown
              listing={this.props.listing}
              addGuest={this.props.addGuest}
              removeGuest={this.props.removeGuest}
            />
          </div>
          { !this.props.setCheckOut ? (
            <div></div>
          ) : (
            <div className="calc-container">
              <CalcTotals
                totalGuests={this.props.totalGuests}
                listing={this.props.listing}
                checkInDate={this.props.checkInDate}
                checkOutDate={this.props.checkOutDate}
              />
            </div>
          )}
          <div className="booking-button">
            <button className="btn book-request" type="submit">
              Request to Book
            </button>
            <p className="booking-message">
              You won't be charged yet
            </p>
          </div>
          <div className="host-message" id="hidden-message">
            <p className="host-message-header">
              This is a rare find
            </p>
            <p className="host-message-body">
              {host.name}'s place is usually booked
            </p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    checkInDate: state.booking.checkInDate,
    checkOutDate: state.booking.checkOutDate,
    setCheckIn: state.booking.setCheckIn,
    setCheckOut: state.booking.setCheckOut,
    guests: state.booking.guests,
    totalGuests: state.booking.totalGuests
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getCheckInDate: getCheckInDate,
    getCheckOutDate: getCheckOutDate,
    addGuest: addGuest,
    removeGuest: removeGuest
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);
