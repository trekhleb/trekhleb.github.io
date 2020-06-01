import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const appContainerId = 'root';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById(appContainerId),
);
