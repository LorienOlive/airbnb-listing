import React, { Component } from 'react';

import search from "../../styles/images/search.jpg"
import "../../styles/Nav.css"


const HelpButton = ({showHelpBar}) => (
  <div>
    <button type="button" className="nav-button" onClick={showHelpBar}>
      <div className="nav-button-underline">
        Help
      </div>
    </button>
  </div>
)

export default HelpButton;
