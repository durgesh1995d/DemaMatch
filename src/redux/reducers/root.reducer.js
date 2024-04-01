import {combineReducers} from 'redux';
import matchReducer from './match.reducer';

const root = combineReducers({
  matchReducer,
});

export default root;
