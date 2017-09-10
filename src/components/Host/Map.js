import React from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";


const Map = withGoogleMap(props => (
  <GoogleMap
    defaultOptions={{
    scrollwheel: false,
    }}
    defaultZoom={12}
    defaultCenter= {{ lat: 20.617810853552122, lng: -105.23048400878906 }}
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyC4OrgXrqxUilEapKHesZ04aIhlVGKxD9w"
  >
    <Marker position={{ lat: 20.617810853552122, lng: -105.23048400878906 }} />
  </GoogleMap>
))



export default Map;
