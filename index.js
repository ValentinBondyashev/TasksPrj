import React from 'react';
import ReactDOM from 'react-dom';

import state from './state.json'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<App state={state}/>, document.getElementById('root'));
registerServiceWorker();
