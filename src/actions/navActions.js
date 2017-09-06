import * as types from "../static/actionTypes"

export function showSidebar() {
  return {
    type: types.SHOW_SIDEBAR
  }
}

export function hideSidebar() {
  return {
    type: types.HIDE_SIDEBAR
  }
}
