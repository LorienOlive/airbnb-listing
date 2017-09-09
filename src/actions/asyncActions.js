import * as types from "../static/actionTypes"

function requestHost() {
  return {
    type: types.REQUEST_HOST
  }
}

function receiveHost() {
  return {
    type: types.RECEIVE_HOST
  }
}

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

const fetchListing = () => {
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

const fetchHost = () => {
  console.log("host fetch initiated")
  return (dispatch) => {
    dispatch(requestHost());
    return fetch("https://my-json-server.typicode.com/LorienOlive/airbnb-hosts-db/hosts")
      .then(resp => resp.json())
      .then(host => {
        dispatch({type: types.FETCH_HOST, payload: host});
        dispatch(receiveHost(host))
    })
  }
};

export const fetchAll = () => {
  return (dispatch) => {
    dispatch(fetchHost()),
    dispatch(fetchListing())
  }
}
