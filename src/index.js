import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import {BrowserRouter} from 'react-router-dom'
import App from './paltrows-power-toes/paltrows-power-toes-1-setup/src/App'



ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
);