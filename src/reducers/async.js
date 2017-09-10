import * as types from "../static/actionTypes";

const initialState = {
  fetchingListing: false,
  fetchedListing: false,
  fetchingHost: false,
  fetchedHost: false,
  fetchingReviews: false,
  fetchedReviews: false,
  listing: [],
  host: [],
  reviews: [],
}

const async = (state=initialState, action) => {
  switch (action.type) {
    case types.REQUEST_LISTING:
      return {
        ...state,
        fetchingListing: true,
        fetchedListing: false
      }
    case types.FETCH_LISTING:
    console.log("listing fetch initiated")
      return {
        ...state,
        fetchingListing: false,
        fetchedListing: true,
        listing: action.payload
      }
    case types.RECEIVE_LISTING:
      return {
        ...state,
        fetchingListing: false,
        fetchedListing: true,
        payload: action.payload
      }
    case types.REQUEST_HOST:
      return {
        ...state,
        fetchingHost: true,
        fetchedHost: false
      }
    case types.FETCH_HOST:
    console.log(action.payload)
      return {
        ...state,
        fetchingHost: false,
        fetchedHost: true,
        host: action.payload
      }
    case types.RECEIVE_HOST:
      return {
        ...state,
        fetchingHost: false,
        fetchedHost: true,
        payload: action.payload
      }
    case types.REQUEST_REVIEWS:
      return {
        ...state,
        fetchingReviews: true,
        fetchedReviews: false
      }
    case types.FETCH_REVIEWS:
    console.log("review fetch initiated")
      return {
        ...state,
        fetchingReviews: false,
        fetchedReviews: true,
        reviews: action.payload
      }
    case types.RECEIVE_REVIEWS:
      return {
        ...state,
        payload: action.payload
      }
    }
  return state;
}

export default async;
