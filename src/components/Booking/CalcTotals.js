import React, { Component } from "react";
import moment from "moment";

class CalcTotals extends Component {

  render() {
    const listing = this.props.listing
    const totalGuests = this.props.totalGuests
    const price = this.props.listing.description.prices.price
    const checkIn = this.props.checkInDate.date
    const checkOut = this.props.checkOutDate.date

    const totalStay = checkOut.diff(checkIn, 'days')
    const totalPrice = price * totalStay

    return (
      <div className="container calc-container">
        <div className="row calc-row">
          <div className="col-md-2 calc-subtotal">
            ${price} x {totalStay}
            <span> ? </span>
          </div>
          <div className="col-md-1 subtotal">
            ${totalPrice}
          </div>
        </div>
        <div className="row service-fee">
          <div className="col-md-2 service-fee-label">
            Service fee
            <span> ? </span>
          </div>
          <div className="col-md-1 add-service-fee">
            $137
          </div>
        </div>
        <div className="row total">
          <div className="col-md-2 calc-total">
            Total
          </div>
          <div className="col-md-1 total">
            ${totalPrice + 137}
          </div>
        </div>
      </div>
    )
  }
}

export default CalcTotals
