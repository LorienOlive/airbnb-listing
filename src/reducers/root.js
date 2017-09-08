import { combineReducers } from 'redux';

import navigation from "./navigation";
import async from "./async";
import listing from "./listing";
import booking from "./booking";
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
  navigation,
  async,
  listing,
  booking,
  form: formReducer
});

export default rootReducer;
