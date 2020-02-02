import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import RandomId from './utils/randomId';
import { visibilityFilters } from './actions';
import App from './components/App';
import './index.css';

const initialState = {
  filter: visibilityFilters.Action,
  books: [
    {
      id: RandomId(),
      title: 'Sample Book Title 1',
      category: 'Sci-Fi',
    },
    {
      id: RandomId(),
      title: 'Sample Book Title 2',
      category: 'Action',
    },
    {
      id: RandomId(),
      title: 'Sample Book Title 3',
      category: 'Kids',
    },
  ],
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
