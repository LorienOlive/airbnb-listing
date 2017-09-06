import * as types from "../static/actionTypes";

const initialState = {
  fetching: false,
  fetched: false,
  host: [],
}

const listing = (state=initialState, action) => {
  switch (action.type) {
    case types.REQUEST_HOST:
      return {
        ...state,
        fetching: true,
        fetched: false,
      }
    case types.FETCH_HOST:
    console.log("host fetch initiated")
      return {
        ...state,
        fetching: false,
        fetched: true,
        listing: action.payload
      }
    case types.RECEIVE_HOST:
      return {
        ...state,
        fetching: false,
        fetched: true,
        payload: action.payload
      }
    }
  return state;
}

export default host;
