import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {
    BrowserRouter as Router,
} from "react-router-dom";


console.log(process.env.PUBLIC_URL)
ReactDOM.render(
    <React.StrictMode>
        <Router >
            <App />
        </Router>

    </React.StrictMode>,
    document.getElementById('root')
);
