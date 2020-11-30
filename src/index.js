import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import {BrowserRouter} from 'react-router-dom';
// import AppLang from './lang-context/AppLang'
import RegistrationForm from './registrationForm/registrationForm';
import App from './playingwithdanger/App'




ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
);