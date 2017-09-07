import React, { Component } from 'react';


const ListingMenu = ({ listing }) => (
  <div className="row listing-menu">
    <div className="col-md-2 listing-menu-item">
      <a href="#overview">Overview</a>
    </div>
    <div className="col-md-1 listing-menu-bullet">
      <i className="fa fa-circle" aria-hidden="true" />
    </div>
    <div className="col-md-2 listing-menu-item">
      <a href="#reviews">Reviews</a>
    </div>
    <div className="col-md-1 listing-menu-bullet">
      <i className="fa fa-circle" aria-hidden="true" />
    </div>
    <div className="col-md-2 listing-menu-item">
      <a href="#host">The Host</a>
    </div>
    <div className="col-md-1 listing-menu-bullet">
      <i className="fa fa-circle" aria-hidden="true" />
    </div>
    <div className="col-md-2 listing-menu-item">
      <a href="#location">Location</a>
    </div>
  </div>
)

export default ListingMenu;
