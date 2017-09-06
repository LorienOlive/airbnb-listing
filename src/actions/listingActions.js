import * as types from "../static/actionTypes"

function requestListing() {
  return {
    type: types.REQUEST_LISTING
  }
}

function receiveListing() {
  return {
    type: types.RECEIVE_LISTING
  }
}

export const fetchListing = () => {
  console.log("listing fetch initiated")
  return (dispatch) => {
    dispatch(requestListing());
    return fetch("https://my-json-server.typicode.com/LorienOlive/airbnb-listings-db/listings")
      .then(resp => resp.json())
      .then(listing => {
        dispatch({type: types.FETCH_LISTING, payload: listing});
        dispatch(receiveListing(listing))
    })
  }
};
