import React, { Component } from "react";


const MoreOptions = ({ listing, host }) => (
  <div className="container more-options-container">
    <h3 className="more-options header">
      Explore other options in and around {host.location.city}
    </h3>
    <p className="more-options subheader">
      More places to stay in {host.location.city}
    </p>
    <ul className="lodging-type-list">
      <li className="lodging-type-item">
        Houses
      </li>
      <li className="lodging-type-bullet">
        <i className="fa fa-circle" aria-hidden="true" />
      </li>
      <li className="lodging-type-item">
        Bed & Breakfasts
      </li>
      <li className="lodging-type-bullet">
        <i className="fa fa-circle" aria-hidden="true" />
      </li>
      <li className="lodging-type-item">
        Lofts
      </li>
      <li className="lodging-type-bullet">
        <i className="fa fa-circle" aria-hidden="true" />
      </li>
      <li className="lodging-type-item">
        Villas
      </li>
      <li className="lodging-type-bullet">
        <i className="fa fa-circle" aria-hidden="true" />
      </li>
      <li className="lodging-type-item">
        Condominiums
      </li>
    </ul>
    <div className="more-options-list">
      {
        listing.more_places.map(place =>
          <p className="option">{place}</p>
      )}
    </div>
  </div>
)


export default MoreOptions;
