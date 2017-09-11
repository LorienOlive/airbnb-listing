import * as types from "../static/actionTypes"


export function addGuest() {
  return {
    type: types.INCREMENT,
    payload: 1
  }
}

export function removeGuest() {
  return {
    type: types.DECREMENT,
    payload: 1
  }
}

export function getCheckInDate( date ) {
  return {
    type: types.GET_CHECKIN_DATE,
    payload: date
  }
}

export function getCheckOutDate( date ) {
  return {
    type: types.GET_CHECKOUT_DATE,
    payload: date
  }
}

export function getTotalPrice( totalPrice ) {
  return {
    type: types.GET_TOTAL_PRICE,
    payload: totalPrice
  }
}
