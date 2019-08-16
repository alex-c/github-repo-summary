import React from 'react';
import ReactDOM from 'react-dom';

// Import Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducer';

// Import Blueprint
import { FocusStyleManager } from '@blueprintjs/core';

// Set up App
import App from './components/App';
import './index.scss';

// Set up Blueprint
FocusStyleManager.onlyShowFocusOnTabs();

// Set up store
const store = createStore(rootReducer);

// Render!
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
