import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import './index.css';
import MusicVisualizer from '../src/MusicVisualizer';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <MusicVisualizer />
  </Router>,
  document.getElementById('root')
);