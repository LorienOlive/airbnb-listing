import React, { Component } from "react";
import { SingleDatePicker,
  SingleDatePickerShape,
  HORIZONTAL_ORIENTATION,
  ANCHOR_LEFT,
} from "react-dates";
import moment from "moment";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getCheckInDate, getCheckOutDate } from "../../actions/bookingActions";

import "react-dates/lib/css/_datepicker.css";

import CheckIn from "./CheckIn"
import CheckOut from "./CheckOut"
import GuestDropdown from "./GuestDropdown";


class BookingForm extends Component {

  render() {

    console.log(this.props.checkInDate);
    console.log(this.props.checkOutDate);
    const focused = this.props.focused;
    const date = this.props.date;

    return (
      <div className="booking-container container">
        <div className="card">
          <div className="row">
            <div className="col-md-6 check-date">
              <label className="booking-checkin-label" htmlFor="checkin">Check In</label>
              <CheckIn listing={this.props.listing[0]}
                getCheckInDate={this.props.getCheckInDate}
              />
            </div>
            <div className="col-md-6 check-date">
              <label className="booking-checkout-label" htmlFor="checkout">Check Out</label>
              <CheckOut listing={this.props.listing[0]}
                getCheckOutDate={this.props.getCheckOutDate}
                checkInDate={this.props.checkInDate}
                setCheckIn={this.props.setCheckIn}
              />
            </div>
          </div>
          <div className="guest-dropdown-container">
            <GuestDropdown />
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
    setCheckIn: state.booking.setCheckIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getCheckInDate: getCheckInDate,
    getCheckOutDate: getCheckOutDate
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);
