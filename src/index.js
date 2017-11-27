import React from 'react';
import ReactDOM from 'react-dom';

// components
import App from './components/App';

import API_KEY from './config';

console.log('environment variable', process.env);

ReactDOM.render(<App API_KEY={API_KEY} />, document.querySelector('.container'));
