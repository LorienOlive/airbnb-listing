import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';

const BookingForm = ({ listing }) => {
  render() {
    <div className="booking-container container">
      <div className="card">
        <div className="row">
          <div className="col-md-6 checkin">
            <label className="booking-checkin-label" for="checkin">Check In</label>
            <input className="booking-checkin-input" name="checkin" />
            <SingleDatePicker />
          </div>
          <div className="col-md-6 checkin">
            <label className="booking-checkout-label" for="checkout">Check Out</label>
            <input className="booking-checkout-input" name="checkout" />
            <SingleDatePicker />
          </div>
        </div>
      </div>
    </div>
  }
}
