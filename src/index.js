import React from 'react';  
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes';

const Root = () => (
  <Router>
    <Routes />
  </Router>
)

const root = document.getElementById('root');
render(<Root />, root);