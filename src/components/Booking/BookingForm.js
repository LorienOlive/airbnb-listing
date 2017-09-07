import { SingleDatePicker } from 'react-dates';

import GuestDropdown from "./GuestDropdown"

const BookingForm = ({ listing }) => (
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
      <div className="guest-dropdown-container">
        <GuestDropdown />
      </div>
    </div>
  </div>
)

export default BookingForm;
