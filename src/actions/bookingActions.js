import * as types from "../static/actionTypes"


export function increment() {
  return {
    type: types.INCREMENT,
    payload: 1
  }
}

export function decrement() {
  return {
    type: types.DECREMENT,
    payload: 1
  }
}

export function getCheckInDate(date) {
  return {
    type: types.GET_CHECKIN_DATE,
    payload: date
  }
}

export function getCheckOutDate(date) {
  return {
    type: types.GET_CHECKOUT_DATE,
    payload: date
  }
}
