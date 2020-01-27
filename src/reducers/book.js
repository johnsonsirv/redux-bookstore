import { CREATE_BOOK, REMOVE_BOOK } from '../actions';

const books = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        {
          ...action.book,
        },
      ];
    case REMOVE_BOOK:
      return state; // to be modified in milestone 4
    default:
      return state;
  }
};

export default books;
