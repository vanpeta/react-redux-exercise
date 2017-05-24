import { combineReducers } from 'redux';
import BoooksReducer from './reducer_books'
import ActiveBookReducer from './reducer_active_book'

const rootReducer = combineReducers({
  books: BoooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
