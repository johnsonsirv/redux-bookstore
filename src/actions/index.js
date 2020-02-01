import RandomId from '../utils/randomId';

export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'CHANGE_FILTER';


// action creators
export const createBook = book => ({
  type: CREATE_BOOK,
  book: { id: RandomId(), ...book },
});
export const removeBook = book => ({
  type: REMOVE_BOOK,
  book,
});

export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter,
});
