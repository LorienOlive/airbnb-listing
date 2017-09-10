import React, { Component } from "react";
import { Sticky, StickyContainer } from 'react-sticky';

import BookingContainer from "./BookingContainer";

class StickyWrapper extends Component {
  render() {
    const host = this.props.host;
    const listing = this.props.listing;
    console.log(this.props)

    return (
      <StickyContainer style={{ width: "345px", height: "100vh", marginTop: "-55px" }}>
        <Sticky>
          {
            ({ isSticky, wasSticky, style, distanceFromTop, distanceFromBottom, calculatedHeight }) => {
              return <BookingContainer host={host} listing={listing} />
            }
          }
        </Sticky>
      </StickyContainer>
    )
  }
}

export default StickyWrapper;
