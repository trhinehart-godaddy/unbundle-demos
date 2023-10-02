import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const root = document.getElementById('app');

ReactDOM.render(<App/>, root, () => {
  window.APP_DONE();
});