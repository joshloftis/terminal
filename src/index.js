import React from 'react';
import ReactDOM from 'react-dom';

import Router from './Router';
import * as serviceWorker from './serviceWorker';

import './styles/css/blue_mono.css';

ReactDOM.render(<Router />, document.getElementById('root'));

serviceWorker.unregister();
