import React, { Component } from "react";

import RatingHeader from "./RatingHeader";
import SubRatings from "./SubRatings";
import ReviewsBody from "./ReviewsBody";


const Reviews = ({ listing, reviews }) => (
  <div>
    <RatingHeader listing={listing} />
    <SubRatings listing={listing} />
    <ReviewsBody reviews={reviews} />
  </div>
)


export default Reviews;
