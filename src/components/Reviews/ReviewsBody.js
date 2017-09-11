import React, { Component } from "react";


class ReviewsBody extends Component {

  render() {
    let reviewsList = null;
    const reviews = this.props.reviews;
    console.log(reviews)

    reviewsList = reviews.map(review => {
      return (
        <div className="container review-container" key={review.id}>
          <div className="row review-row">
            <div className="col-md-4 user-column">
              <div className="container user-details">
                <div className="row user-row">
                  <div className="col-md-2 user-thumbnail">
                    <img className="user-pic" src={review.profile_img} alt="" />
                  </div>
                  <div className="col-md-2 name-date">
                    <p className="user-name">{review.user}</p>
                    <p className="review-date">{review.date}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 button-column">
              <div className="container reviews-buttons-container">
                <div className="row reviews-buttons-row">
                  <div className="col-md-2 flag-review">
                    <button className="btn report-review">
                      <i className="fa fa-flag-o" aria-hidden="true" /> Report
                    </button>
                  </div>
                  <div className="col-md-2 helpful">
                    <button className="btn helpful-review">
                      <i className="fa fa-thumbs-o-up" aria-hidden="true" /> Helpful
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="review-text-container">
            <p className="review-text">{review.review}</p>
          </div>
        </div>
      )
    })
    console.log(reviewsList);
    return (
      <div>{reviewsList}</div>
    );
  }
}

export default ReviewsBody;
