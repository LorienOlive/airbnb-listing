import React, { Component } from "react";


class SimilarListings extends Component {


  makeStars = (rating) => {
    let stars = []
    for (let i = 0; i < rating; i++ ) {
    stars.push(<i className="fa fa-star" aria-hidden="true" />)
    }
    return (
      <div className="row rating-row">{stars}</div>
    )
  }

  render() {

    const similarListing = this.props.listing.similar_listings;
    console.log(similarListing);
    console.log("similar listing ^^^")
    const similarCol = similarListing.map(listing => {
      return (
        <div className="col-md-4 simList-column" key={listing.id}>
          <div className="simList_pic">
            <img className="simList_img" src={listing.listing_img} />
            <i className="fa fa-heart-o" aria-hidden="true" />
          </div>
          <h4 className="simList-title">
            {listing.name}
          </h4>
          <div className="container simList-text-container">
            <div className="row simList-text-row">
              <div className="col-md-2 simList-text-col">
                <p className="simList-type">{listing.type}</p>
              </div>
              <div className="col-md-1 simList-bullet">
                <i className="fa fa-circle" aria-hidden="true"></i>
              </div>
              <div className="col-md-2 simList-text-col">
                <p className="simList-type">{listing.beds} beds</p>
              </div>
            </div>
          </div>
          <div className="simlist-rating-container">
            {this.makeStars(listing.rating)}
            {listing.num_reviews}
          </div>
        </div>
      )
    })

    return (
      <div className="row simList-row">
        {similarCol}
      </div>
    )
  }
}

export default SimilarListings;
