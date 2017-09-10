import React, { Component } from 'react';

import "../styles/Footer.css";

const Footer = (props) => (
  <div className="container footer-container">
    <div className="row footer-row">
      <div className="col-md-3 footer-dropdow-column">
        <div className="dropdown translation-dropdown">
          <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            English
            <span className="down-caret"><i className="fa fa-angle-down" aria-hidden="true"></i></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li><a href="#">Spanish</a></li>
            <li><a href="#">Portuguese</a></li>
            <li><a href="#">French</a></li>
          </ul>
        </div>
        <div className="dropdown translation-dropdown">
          <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            USD
            <span className="down-caret"><i className="fa fa-angle-down" aria-hidden="true"></i></span>
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li><a href="#">GBP</a></li>
            <li><a href="#">AUD</a></li>
            <li><a href="#">CAD</a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-2 link-list-column">
        <h5 className="link-list-header">Airbnb</h5>
        <a className="footer-link" href="#">Help</a>
        <a className="footer-link" href="#">Policy</a>
        <a className="footer-link" href="#">Terms</a>
        <a className="footer-link" href="#">Privacy</a>
      </div>
      <div className="col-md-2 link-list-column">
        <h5 className="link-list-header">Discover</h5>
        <a className="footer-link" href="#">Trust</a>
        <a className="footer-link" href="#">Safety</a>
      </div>
      <div className="col-md-2 link-list-column">
        <h5 className="link-list-header">Hosting</h5>
        <a className="footer-link" href="#">Why Host</a>
        <a className="footer-link" href="#">Responsible Hosting</a>
      </div>
    </div>
  </div>
)

export default Footer;
