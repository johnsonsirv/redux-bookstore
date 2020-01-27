export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

// action creators
export const createBook = book => ({
  type: CREATE_BOOK,
  book,
});
export const removeBook = book => ({
  type: REMOVE_BOOK,
  book,
});
