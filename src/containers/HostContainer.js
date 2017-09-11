import React, { Component } from "react";

import "../styles/Host.css"

import HostHeader from "../components/Host/HostHeader";
import Neighborhood from "../components/Host/Neighborhood";



class HostContainer extends Component {

  render() {
    const host = this.props.host;

    const languages = host.languages.map(language => {
      return (
        <span key={host.id}>{language}</span>
      )
    })

    return (
      <div>
        <div className="container host-container" id="host">
          <HostHeader host={host}
            languages={languages}
          />
        </div>
        <div className="container map-container">
          <Neighborhood host={host} />
        </div>
        <p className="location-disclaimer">
          Exact location information is provided after a booking is confirmed
        </p>
      </div>
    )
  }
}

export default HostContainer;
