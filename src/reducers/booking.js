import * as types from "../static/actionTypes";

const intialState = {
    guests: 1,
    totalGuests: 0
}


const booking = (state = intialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      console.log("increment successful");
        return {
          ...state,
          guests: state.guests + action.payload,
        }
      case types.DECREMENT:
        console.log("decrement successful");
        return {
          ...state,
          guests: state.guests - action.payload,
        }
    }
  return state;
}

export default booking;
