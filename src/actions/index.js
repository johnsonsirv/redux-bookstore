import RandomId from '../utils/randomId';
import { getVisibilityFilters } from '../utils/categoryList';

export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'CHANGE_FILTER';

const categories = getVisibilityFilters();
export const visibilityFilters = {
  ...categories,
};

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
