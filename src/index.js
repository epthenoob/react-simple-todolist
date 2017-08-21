import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Tutorial from './Tutorial';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Tutorial />, document.getElementById('tutorial'));
registerServiceWorker();
