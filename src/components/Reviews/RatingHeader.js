import React, { Component } from 'react';

class RatingHeader extends Component {
    render() {
      const stars = []
      const listing = this.props.listing[0];
      const overall = listing.ratings.overall;


      for (let i = 0; i < overall; i++ ) {
        stars.push(<i className="fa fa-star" aria-hidden="true" />)
      }
      return (
        <div className="container rating-header-container">
          <div className="row overall-rating-row">
            <div className="col-md-3 overall-rating-title">
              <h3 className="overall-rating-header">{listing.reviews} Reviews</h3>
            </div>
            <div className="col-md-3 overall-rating-stars">
              <div className="row overall-stars">{stars}</div>
            </div>
            <div className="col-md-6 overall-rating-search">
              <input className="search-reviews" type="text" name="reviews" placeholder="Search reviews" />
            </div>
          </div>
        </div>
      )
    }
}

export default RatingHeader;
