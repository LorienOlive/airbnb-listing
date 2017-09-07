import React, { Component } from 'react';

import MainRating from "./MainRating"

import bed from "../../styles/images/bed.png";
import guests from "../../styles/images/guests.png";
import door from "../../styles/images/door.png";
import bath from "../../styles/images/bath.png"

const ListingHeader = ({ host, listing }) => (

  <div className="container listing-header" key={listing.listing_id}>
    <div className="row header-row">
      <div className="col-md-7 header-column">
        <h1 className="main-header">{listing.title}</h1>
      </div>
      <div className="col-md-1">
        <img className="host-thumbnail" src={host.profile_img} />
      </div>
    </div>
      <div className="container">
        <div className="row listing-subheader">
          <div className="col-md-3 listing-subheader-item">{listing.type}</div>
          <div className="listing-subheader-bullet">
            <i className="fa fa-circle" aria-hidden="true"></i>
          </div>
          <div className="col-md-2 listing-subheader-item">{host.location.city}</div>
          <div className="col-md-2 listing-subheader-item">{listing.reviews}</div>
          <MainRating listing={listing} />
        </div>
      </div>
      <div className="row listing-details">
        <div className="col-md-2 listing-details-item ">
          <img className="listing-details-icon" src={guests} />
          <span className="listing-details-text">{listing.guests} guests</span>
        </div>
        { listing.bedrooms == 1 ? (
        <div className=" col-md-2 listing-details-item">
          <img className="listing-details-icon" src={door} />
          <span className="listing-details-text">{listing.bedrooms} bedroom</span>
        </div>
        ) : (
        <div className="col-md-2 listing-details-item">
          <img className="listing-details-icon" src={door} />
          <span className="listing-details-text">{listing.bedrooms} bedrooms</span>
        </div>
        )}
        <div>
        { listing.beds == 1 ? (
          <div className="col-md-2 listing-details-item">
            <img className="listing-details-icon" src={bed} />
            <span className="listing-details-text">{listing.beds} bed</span>
          </div>
        ) : (
          <div className="col-md-2 listing-details-item">
            <img className="listing-details-icon" src={bed} />
            <span className="listing-details-text">{listing.beds} beds</span>
          </div>
        )}
        </div>
        <div className="col-md-2 listing-details-item">
          <img className="listing-details-icon" src={bath} />
          <span className="listing-details-text">{listing.baths} baths</span>
        </div>
      </div>
    </div>
)

export default ListingHeader;
