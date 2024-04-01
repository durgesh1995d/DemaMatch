import {combineReducers} from 'redux';
import matchReducer from './match.reducer';

const combinedReducer = combineReducers({
  match: matchReducer,
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

export default rootReducer;
