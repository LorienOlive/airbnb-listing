import React, { Component } from 'react';

class MainRating extends Component {
    render() {
      const stars = []
      const mainRating = this.props.listing.ratings.overall;
      console.log(mainRating)

      for (let i = 0; i < mainRating; i++ ) {
        stars.push(<i className="fa fa-star" aria-hidden="true" />)
      }
      return (
        <div className="row rating-row">{stars}</div>
      )
    }
}

export default MainRating;
