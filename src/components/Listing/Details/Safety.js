import React from "react"

const Safety = ({ listing }) => (
  <div className="container details-container">
    { listing.description.safety_features ? (
      <div>
        <div className="row details-row">
          <div className="col-md-2 details-header-column">
            <h3 className="details-header">Safety Features</h3>
          </div>
          <div className="col-md-10 details-content-column">
            <p className="details-text safety">{listing.description.safety_features}</p>
          </div>
        </div>
      </div>
      ) : (
        <div></div>
      )}
  </div>
)

export default Safety;
