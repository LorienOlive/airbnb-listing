import React from "react"


const SaveButtonBox = ({ listing }) => (
  <div className="card save-card">
    <button className="btn save-button" type="submit">
      <i className="fa fa-heart-o" aria-hidden="true" />
      Save to Wish List
    </button>
    <p className="saves">{listing.saves} travelers saved this place</p>
    <div className="icon-container">
      <a className="save-fb" href=""><i className="fa fa-facebook" aria-hidden="true" /></a>
      <a className="save-twitter" href=""><i className="fa fa-twitter" aria-hidden="true" /></a>
      <a className="save-email" href=""><i className="fa fa-envelope" aria-hidden="true" /></a>
      <a className="save-more" href=""><i className="fa fa-ellipsis-h" aria-hidden="true" /></a>
    </div>
    <div className="save-hidden-p">
      <p className="report-listing">
        <i className="fa fa-flag-o" aria-hidden="true" />
         Report this listing
      </p>
    </div>
  </div>

)

export default SaveButtonBox;
