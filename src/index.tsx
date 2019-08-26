import React from 'react';
import ReactDOM from 'react-dom';

// Import Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

// Import Blueprint
import { FocusStyleManager } from '@blueprintjs/core';

// Set up App
import App from './components/App';
import './index.scss';
import localStorageKeys from './constants/LocalStorageKeys';
import { Sorting } from './constants/Sorting';

// Set up Blueprint
FocusStyleManager.onlyShowFocusOnTabs();

// Set up store
const initialState = {
  user: {
    login: '',
  },
  favorites: JSON.parse(localStorage.getItem(localStorageKeys.favorites)) || [],
  loading_state: false,
  language_statistics: null,
  stars_statistics: null,
  repositories: [],
  sorting: Sorting.Alphabetical,
  pagination: {
    items_per_page: 25,
    pages: 1,
    current_page: 1,
  },
};
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

// Render!
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
