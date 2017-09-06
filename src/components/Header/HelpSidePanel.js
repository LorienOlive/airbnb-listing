import React, { Component } from 'react';

import search from "../../styles/images/search.jpg"

const HelpSidePanel = (props) => (
  <div>
    <button type="button" className="btn nav-button" data-toggle="modal" data-target="#myModal">
      <div className="nav-button-underline">
        Help
      </div>
    </button>
    <div className="modal" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h2 className="modal-title" id="myModalLabel">Airbnb Help</h2>
          </div>
          <form className="modal-form">
            <div className="form-group">
              <div className="help-modal-searchbar">
                <img className="search-icon" src={search} alt="small magnifying glass" />
                <input className="search-input" type="text" placeholder="search" />
              </div>
            </div>
          </form>
          <h4 className="help-modal-subheader">SUGGESTED ARTICLES</h4>
          <ul className="help-modal-list">
            <li className="row help-modal-list-item">
              <a className="col-sm-10 help-modal-link" href="https://www.airbnb.com/help/getting-started/how-it-works">
                Getting Started Guide
              </a>
              <i className="glyphicon glyphicon-menu-right" />
            </li>
            <li className="row help-modal-list-item">
              <a className="col-sm-10 help-modal-link" href="">
                How do I submit a reservation request?
              </a>
              <i className="glyphicon glyphicon-menu-right" />
            </li>
          </ul>
          </div>
        </div>
      </div>
  </div>
)

export default HelpSidePanel;
