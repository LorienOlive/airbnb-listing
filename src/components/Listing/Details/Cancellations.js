import React from "react"

const Cancellations = ({ listing }) => (
  <div className="container details-container">
    { listing.description.cancellation ? (
      <div>
        <div className="row details-row">
          <div className="col-md-2 details-header-column">
            <h3 className="details-header">Cancellations</h3>
          </div>
          <div className="col-md-10 details-content-column">
            <h3 className="details-header">{listing.description.cancellation.policy_type}</h3>
            <p className="details-text cancellations">{listing.description.cancellation.details}</p>
            <a className="cancellations-link" href="https://www.airbnb.com/home/cancellation_policies#super-strict-60">View Details</a>
          </div>
        </div>
      </div>
      ) : (
        <div></div>
      )}
  </div>
)

export default Cancellations;
