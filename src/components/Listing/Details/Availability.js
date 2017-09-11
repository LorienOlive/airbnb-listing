import React from "react"

const Availability = ({ listing }) => (
  <div className="container details-container">
    { listing.description.availability ? (
      <div>
        <div className="row details-row">
          <div className="col-md-2 details-header-column">
            <h3 className="details-header">Availability</h3>
          </div>
          <div className="col-md-10  availability details-content-column">
            <div className="row availability-row">
              <div className="col-md-5 left-availability-column">
                <p className="details-text availability-text">
                  <span>{listing.description.availability.min_stay} nights</span> minimum stay
                </p>
              </div>
              <div className="col-md-5 right-availability-column">
                <a className="availability-link" href="#">View calendar</a>
              </div>
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
