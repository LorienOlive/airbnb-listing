import React, { Component } from 'react';

import Rating from "./Rating"

const AboutHeader = ({ listing }) => {
  render() {
    <div className="row" key={listing.id}>
      <h1 className="about-header">VALLARTA ROMANTIC AMAPAS OCEAN VIEW</h1>
      <div className="about-subheader row">
        <div className="about-subheader-item col-md-3">{listing.type}</div>
        <div className="about-subheader-bullet">
          <i class="fa fa-circle" aria-hidden="true"></i>
        </div>
        <div className="about-subheader-item col-md-3">{listing.location.city}</div>
        <div className="about-subheader-item col-md-3">{listing.rating}</div>
        <Rating />
      </div>
      <div className="about-details row">
        <div className="about-details-item col-md-3">
          <img className="about-details-icon" src="../styles/guests.png" />
          <p className="about-details-text">{listing.guests} guests</p>
        </div>
        { listing.bedrooms == 1 ? (
          <div className="about-details-item col-md-3">
            <img className="about-details-icon" src="../styles/door.png" />
            <p className="about-details-text">{listing.bedrooms} bedroom</p>
          </div>
        ) : (
          <div className="about-details-item col-md-3">
            <img className="about-details-icon" src="../styles/door.png" />
            <p className="about-details-text">{listing.bedrooms} bedrooms</p>
          </div>
        )}
        </div>
        <div>
        { listing.beds == 1 ? (
          <div className="about-details-item col-md-3">
            <img className="about-details-icon" src="../styles/bed.png" />
            <p className="about-details-text">{listing.beds} bed</p>
          </div>
        ) : (
          <div className="about-details-item col-md-3">
            <img className="about-details-icon" src="../styles/bed.png" />
            <p className="about-details-text">{listing.beds} beds</p>
          </div>
        )}
        </div>
        <div className="about-details-item col-md-3">
          <i className="fa fa-bath" aria-hidden="true"></i>
        </div>
      </div>
  }
}
