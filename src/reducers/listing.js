import * as types from "../static/actionTypes";

const initialState = {
  fetching: false,
  fetched: false,
  listing: [],
}

const listing = (state=initialState, action) => {
  switch (action.type) {
    case types.REQUEST_LISTING:
      return {
        ...state,
        fetching: true,
        fetched: false,
      }
    case types.FETCH_LISTING:
    console.log("listing fetch initiated")
      return {
        ...state,
        fetching: false,
        fetched: true,
        listing: action.payload
      }
    case types.RECEIVE_LISTING:
      return {
        ...state,
        fetching: false,
        fetched: true,
        payload: action.payload
      }
    }
  return state;
}

export default listing;
