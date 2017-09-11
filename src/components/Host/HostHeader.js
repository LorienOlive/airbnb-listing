import React from 'react';

import verified from "../../styles/images/verified.png";

const HostHeader = ({ host, languages }) => (
  <div className="container host-container">
    <div className="row host-row">
      <p className="host-reviews">
        This host has {host.total_reviews} reviews for other properties
      </p>
      <a className="btn view-other" href="https://www.airbnb.com/users/show/1575174">
        View other reviews
      </a>
    </div>
    <div className="host-header-container">
      <h3 className="host-header">Hosted by {host.name}</h3>
      <div className="container extra-container">
        <div className="row host-subheader-row">
          <div className="col-md-3 host-subheader">
            <p className="host-subheader-text">
              {host.location.city}, {host.location.country}
            </p>
          </div>
          <div className="col-md-1 host-bullet">
            <i className="fa fa-circle" aria-hidden="true"></i>
          </div>
          <div className="col-md-2 host-subheader">
            <p className="host-subheader-text">
              Joined in {host.date_joined}
            </p>
          </div>
        </div>
        <div className="row host-button-row">
          <div className="col-md-2 host-button-column">
            <a className="host-reviews-button" href="https://www.airbnb.com/users/show/1575174#reviews">
              {host.reviews}
            </a>
            <p className="host-label">Reviews</p>
          </div>
          <div className="col-md-2 host-button-column">
            <img className="verified-badge" src={verified} />
            <p className="host-label">Verified</p>
          </div>
        </div>
        <div className="host-description">
          <p className="host-text">
            {host.description}
          </p>
        </div>
      </div>
      <button className="btn host-contact">Contact Host</button>
      <ul className="host-details-list">
        <li>
          <p className="host-details-item">
            Languages: <span>{languages[0]}</span>
          </p>
        </li>
        <li>
          <p className="host-details-item">
            Response rate: <span>{host.response_rate}</span>
          </p>
        </li>
        <li>
          <p className="host-details-item">
            Response time: <span>{host.response_time}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
)

export default HostHeader;
