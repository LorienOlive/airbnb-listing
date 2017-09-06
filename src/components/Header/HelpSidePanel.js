import React, { Component } from 'react';

const HelpSidePanel = ({ hideHelpBar }) =>
  <div className="help-sidebar" id="help-sidebar" tabIndex="0">
    <div className="help-side-panel" role="document"><div>
      <div className="help-content">
        <div className="help-header">
          <button type="button" className="close" aria-label="Close" onClick={hideHelpBar}>
            <span aria-hidden="true">&times;</span>
          </button>
          <h2 className="help-title" id="myModalLabel">Airbnb Help</h2>
        </div>
        </div>
      </div>
    </div>
  </div>

export default HelpSidePanel;
