import * as types from "../static/actionTypes";

const initialState = {
  showMore: false
}

const listing = (state=initialState, action) => {
  switch (action.type) {
    case types.SHOW_MORE:
    console.log("show more successful")
      return {
        ...state,
        showMore: true
      }
  }
  return state;
}

export default listing;
