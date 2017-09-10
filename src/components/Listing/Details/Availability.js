import React from "react"

const Availability = ({ listing }) => (
  <div className="container details-container">
    { listing.description.availability ? (
      <div>
        <div className="row details-row">
          <div className="col-md-2 details-header-column">
            <h3 className="details-header">Availability</h3>
          </div>
        </div>
        <div className="col-md-10 details-content-column">
          <div className="row prices-top-row">
            <div className="col-md-5 left-availability-column">
              <p className="details-reg-text">{listing.description.availability.min_stay} minimum stay</p>
            </div>
            <div className="col-md-5 right-availability-column">
              <a className="prices-link" href="#">View calendar</a>
            </div>
          </div>
        </div>
      </div>
      ) : (
        <div></div>
      )}
  </div>
)

export default Availability;
