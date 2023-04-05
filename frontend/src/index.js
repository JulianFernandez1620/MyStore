import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './partes/Footer';
import axios from 'axios';
import './index.css';

axios.defaults.baseURL = 'http://localhost:8000';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);