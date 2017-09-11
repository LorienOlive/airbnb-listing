import React, {Component} from 'react';
import { withGoogleMap } from "react-google-maps";


import Map from "./Map";

class Neighborhood extends Component {

  render() {
    const host = this.props.host;
    return (
      <div className="container neighborhood-container" id="location">
        <h3 className="neighborhood-header">
          {host.name}'s home is located in {host.location.city}, {host.location.state}, {host.location.country}
        </h3>
        <a className="guidebook-link" href="https://www.airbnb.com/things-to-do/rooms/978139">
         {host.name}'s Guidebook
        </a>
        <Map
            host={host}
            containerElement={
              <div className="map-box" style={{ height: "650px", width: "1050px" }} />
            }
            mapElement={
              <div className="map" style={{ height: "100%", width: "100%" }} />
            }
        />
      </div>
    )
  }
}

export default Neighborhood;
