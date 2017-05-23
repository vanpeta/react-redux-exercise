import { combineReducers } from 'redux';
import { BoooksReducer } from './reducer_books'

const rootReducer = combineReducers({
  books: BoooksReducer
});

export default rootReducer;
