import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';

const root = document.getElementById('header');

ReactDOM.render(<Header/>, root, () => {
  window.HEADER_DONE();
});