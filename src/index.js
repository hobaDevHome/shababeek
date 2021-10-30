import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { InfoProvider, InfotProvider } from './components/context';
import App from './App';

ReactDOM.render(
  <InfotProvider>
    <Router>
      <App />
    </Router>
  </InfotProvider>,
  document.getElementById('root')
);
