import React, { Component } from 'react';

const NavDropdown = (props) => (
  <div className="dropdown nav-dropdown">
    <button className="btn dropdown-toggle nav-dropdown-button" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
      <div className="nav-button-underline">
        Become a Host
      </div>
    </button>
    <ul className="dropdown-menu nav-host">
      <li className="nav-host-item">
        <a className="nav-host-link" href="https://www.airbnb.com/host/homes?from_nav=1">
          Become a host
        </a>
      </li>
      <li className="nav-host-item">
        <a className="nav-host-link" href="https://www.airbnb.com/co-hosting?ref=nav_dropdown">
          No time to host?
        </a>
      </li>
      <li className="nav-host-item">
        <a className="nav-host-link" href="https://www.airbnb.com/host/experiences?from_nav=1">
          Host an experience
        </a>
      </li>
    </ul>
  </div>
)

export default NavDropdown;
