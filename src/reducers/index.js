import { combineReducers } from 'redux';
import books from './book';
import filter from './filter';

const rootReducer = combineReducers({
  books,
  filter,
});

export default rootReducer;
