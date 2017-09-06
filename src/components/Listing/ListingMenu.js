import React, { Component } from 'react';


const ListingMenu = ({ listing }) => {
  render() {
    <div className="about-menu row">
      <div className="about-menu-item col-md-3">
        <a href="#overview">Overview</a>
      </div>
      <div className="about-menu-bullet">
        <i class="fa fa-circle" aria-hidden="true"></i>
      </div>
      <div className="about-menu-item col-md-3">
        <a href="#reviews">Reviews</a>
      </div>
      <div className="about-menu-bullet">
        <i class="fa fa-circle" aria-hidden="true"></i>
      </div>
      <div className="about-menu-item col-md-3">
        <a href="#host">The Host</a>
      </div>
      <div className="about-menu-bullet">
        <i class="fa fa-circle" aria-hidden="true"></i>
      </div>
      <div className="about-menu-item col-md-3">
        <a href="#location">Location</a>
      </div>
    }
}
