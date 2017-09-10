import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { fetchReviews } from "../actions/asyncActions";

import "../styles/Reviews.css";

import Reviews from "../components/Reviews/Reviews";

class ReviewsContainer extends Component {

  componentWillMount() {
    console.log("reviews fetch fired")
    this.props.fetchReviews();
  }

  render() {

    const fetched = this.props.fetched;
    const reviews = this.props.reviews;
    const listing = this.props.listing;

    if (!fetched) {
      return null
    }

    return (
      <div className="reviews-container">
        <Reviews reviews={reviews}
          listing={listing}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    fetched: state.async.fetchedReviews,
    reviews: state.async.reviews,
    listing: state.async.listing
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchReviews: fetchReviews,
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
