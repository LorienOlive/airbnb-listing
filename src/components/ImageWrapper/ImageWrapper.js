import React, { Component } from 'react';


class ImageWrapper extends Component {
    render() {
      const mainImage = this.props.listing.listing_imgs[0];
      console.log(mainImage);
      const mainImageStyle = {
        width: "100%",
        height: "358px",
        backgroundImage: `url(${mainImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin: "none"
      }
      return (
        <div className="main-image-wrapper"
             style={mainImageStyle}>
        </div>
      )
    }
}

export default ImageWrapper;
