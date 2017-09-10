import React from "react"

const Prices = ({ listing }) => (
  <div className="container details-container">
    { listing.description.prices ? (
      <div className="row details-row">
        <div className="col-md-2 details-header-column">
          <h3 className="details-header">Prices</h3>
        </div>
        <div className="col-md-10 details-content-column">
          <div className="row prices-top-row">
            <div className="col-md-5 left-prices-column">
              <h3 className="details-header">Extra people <span>{listing.description.prices.extra_people}</span></h3>
            </div>
            <div className="col-md-5 right-prices-column">
              <h3 className="details-header">Security Deposit <span>{listing.description.prices.security_deposit}</span></h3>
            </div>
          </div>
          <div className="prices-bottom-row">
            <p className="prices-strong-text">
              Always communicate through Airbnb
            </p>
            <p className="prices-reg-text">
              To protect your payment, never transfer money or communicate outside of the Airbnb website or app.
            </p>
            <a className="prices-link" href="https://www.airbnb.com/help/article/199">Learn more</a>
          </div>
        </div>
      </div>
      ) : (
        <div></div>
      )}
  </div>
)

export default Prices;
