import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';

import { FocusStyleManager } from "@blueprintjs/core";
 
FocusStyleManager.onlyShowFocusOnTabs();

ReactDOM.render(<App />, document.getElementById('root'));
