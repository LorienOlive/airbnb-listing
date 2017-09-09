import * as types from "../static/actionTypes";

import moment from "moment";

const intialState = {
  totalGuests: 1,
  totalGuests: 1,
  checkInDate: null,
  checkOutDate: null,
  setCheckIn: false,
  setCheckOut: false,
}


const booking = (state = intialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      console.log("increment successful");
      return {
        ...state,
        totalGuests: state.totalGuests + action.payload
      }
    case types.DECREMENT:
      console.log("decrement successful");
      return {
        ...state,
        totalGuests: state.totalGuests + action.payload
      }
    case types.GET_CHECKIN_DATE:
      console.log(action.payload)
      console.log("getCheckInDate successful");
      return {
        ...state,
        checkInDate: action.payload,
        setCheckIn: true
      }
    case types.GET_CHECKOUT_DATE:
      console.log("getCheckOutDate successful");
      return {
        ...state,
        checkOutDate: action.payload,
        setCheckOut: true
      }
  }
  return state;
}

export default booking;
