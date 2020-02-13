import React from 'react';
import ReactDOM from 'react-dom';


import Router from './router';

const appRoot = document.getElementById('root');

function App() {
  return (
    <Router />
  );
}

ReactDOM.render(<App />, appRoot);