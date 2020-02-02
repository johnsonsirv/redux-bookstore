import { CHANGE_FILTER } from '../actions';

const filter = (state = 'ALL', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filter;
