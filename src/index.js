import React from 'react';
import ReactDOM from 'react-dom';
// import {AuthContext} from './components/context/auth-context';
import './index.css';
import App from './App';
import AuthContextProvider from './components/context/auth-context';

ReactDOM.render(<AuthContextProvider><App /></AuthContextProvider>, document.getElementById('root'));
