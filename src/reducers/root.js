import { combineReducers } from 'redux';

import navigation from "./navigation";
import async from "./async";
import listing from "./listing";


const rootReducer = combineReducers({
  navigation,
  async,
  listing
});

export default rootReducer;
