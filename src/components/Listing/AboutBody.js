import React, { Component } from 'react';


const AboutBody = ({ listing, showMore, initStyle, expandStyle }) => (
  <div className="about-container" style={!showMore ? initStyle : expandStyle} >
    <h3 className="about-header">
      About this listing
    </h3>
    <h4 className="about-subheader">
      The Space
    </h4>
    <span className="about-paragraph">
      {listing.description.space.replace(/&#39;/g,"'").replace(/&quot;/g,'"').split("\n").map(i => {
        return <p>{i}<br/></p>
        }
      )}
    </span>
    <h4 className="about-subheader">
      Guest Access
    </h4>
    <p className="about-paragraph">
      {listing.description.guest_access}
    </p>
    <h4 className="about-subheader">
      Interaction with guests
    </h4>
    <p className="about-paragraph">
      {listing.description.interaction}
    </p>
  </div>
)

export default AboutBody;
