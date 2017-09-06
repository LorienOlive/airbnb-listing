import * as types from "../static/actionTypes"

function requestHost() {
  return {
    type: types.REQUEST_HOST
  }
}

function receiveListing() {
  return {
    type: types.RECEIVE_HOST
  }
}

export const fetchListing = () => {
  console.log("host fetch initiated")
  return (dispatch) => {
    dispatch(requestHost());
    return fetch("https://my-json-server.typicode.com/LorienOlive/airbnb-hosts-db/hosts")
      .then(resp => resp.json())
      .then(host => {
        dispatch({type: types.FETCH_HOST, payload: host});
        dispatch(receiveListing(host))
    })
  }
};
