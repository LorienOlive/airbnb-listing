import * as types from "../static/actionTypes";

const initialState = {
  showHelp: false
}

const navigation = (state=initialState, action) => {
  switch (action.type) {
    case types.SHOW_SIDEBAR:
    console.log("show sidebar successful")
      return {
        ...state,
        showHelp: true
      }
    case types.HIDE_SIDEBAR:
    console.log("hide sidebar successful")
      return {
        ...state,
        hideHelp: false
      }
  }
  return state;
}

export default navigation;
