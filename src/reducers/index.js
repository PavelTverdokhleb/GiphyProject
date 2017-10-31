import { combineReducers } from 'redux';
import GifsReducer from './gifs_reducer';

const rootReducer = combineReducers({
  gifs: GifsReducer
});

export default rootReducer;
