import React from "react"

import bed_light from "../../../styles/images/bed-light.jpg"

const SleepingArrangements = ({ listing }) => (
  <div className="container details-container">
    { listing.description.sleeping_arrangements ? (
      <div>
        <div className="row details-row">
          <div className="col-md-2 details-header-column">
            <h3 className="details-header sleeping">Sleeping arrangements</h3>
          </div>
          <div className="col-md-10 details-content-column">
            <div className="row prices-top-row">
              <div className="col-md-5 sleeping-column">
                <img className="sleeping-icon" src={bed_light} />
                <h3 className="details-header sleeping">Bedroom {listing.description.sleeping_arrangements.bedrooms}</h3>
                <p className="details-text sleeping" >{listing.description.sleeping_arrangements.beds}</p>
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

export default SleepingArrangements;
