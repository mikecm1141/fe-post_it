import { combineReducers } from 'redux';

import topicsReducer from './topics';

const rootReducer = combineReducers({
  topicsState: topicsReducer
});

export default rootReducer;
