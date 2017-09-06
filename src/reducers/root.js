import { combineReducers } from 'redux';

import navigation from "./navigation";
import listing from "./listing";
import host from "./host";


const rootReducer = combineReducers({
  navigation,
  listing,
  host
});

export default rootReducer;
