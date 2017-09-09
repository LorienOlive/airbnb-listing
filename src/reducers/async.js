import * as types from "../static/actionTypes";

const initialState = {
  fetching: false,
  fetched: false,
  listing: [],
  host: []
}

const async = (state=initialState, action) => {
  switch (action.type) {
    case types.REQUEST_LISTING:
      return {
        ...state,
        fetching: true,
      }
    case types.FETCH_LISTING:
    console.log("listing fetch initiated")
      return {
        ...state,
        fetching: false,
        listing: action.payload
      }
    case types.RECEIVE_LISTING:
      return {
        ...state,
        fetched: true,
        payload: action.payload
      }
    case types.REQUEST_HOST:
      return {
        ...state,
        fetching: true,
        fetched: false
      }
    case types.FETCH_HOST:
    console.log("host fetch initiated")
      return {
        ...state,
        fetching: false,
        host: action.payload
      }
    case types.RECEIVE_HOST:
      return {
        ...state,
        payload: action.payload
      }
    }
  return state;
}

export default async;
