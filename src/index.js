import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
//tell react-om inside which which compo u want to wrap i.e app(compo) here
import './index.css';
import {App } from './components'; //importing the files from components
//wrap th whole components with the user provider from user provider.js
//import tye user provider

import UserProvider from './providers/UserProvider'


ReactDOM.render(
    <UserProvider data = "1">
    <BrowserRouter>

    <App/>
    </BrowserRouter>
    </UserProvider>,




//it will grab the root element from the public folder of index.html file
document.getElementById('root')


)