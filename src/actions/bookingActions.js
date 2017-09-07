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
