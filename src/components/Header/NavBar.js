import React, { Component } from 'react';

import NavDropdown from "./NavDropdown";
import HelpSidePanel from "./HelpSidePanel";
import SignUpModal from "./SignUpModal";
import LogInModal from "./LogInModal";

import "../../styles/Nav.css"
import logo from "../../styles/images/airbnb_logo.png"
import search from "../../styles/images/search.jpg"

const NavBar = (props) => (
  <div className="navbar">
    <div className="navbar-header">
      <a className="navbar-brand" href="https://www.airbnb.com/?logo=1">
        <img className="header-logo" src={logo} alt="Airbnb logo" />
      </a>
    </div>
    <form className="navbar-left container navbar-form">
      <div className="row searchbar">
        <div className="col-md-1 search-icon-box">
          <img className="search-icon" src={search} alt="small magnifying glass" />
        </div>
        <div className="col-md-10 search-input-box">
          <input className="search-input" type="text" placeholder="Search" />
        </div>
      </div>
    </form>
    <ul className="nav navbar-nav navbar-right">
      <li className="nav-item">
        <NavDropdown />
      </li>
      <li className="nav-item">
        <HelpSidePanel />
      </li>
      <li className="nav-item">
        <SignUpModal />
      </li>
      <li className="nav-item">
        <LogInModal />
      </li>
    </ul>
  </div>
)

export default NavBar;
