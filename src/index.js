import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
//tell react-om inside which which compo u want to wrap i.e app(compo) here
import './index.css';
import {App ,SignIn} from './components'; //importing the files from components


ReactDOM.render(
    <BrowserRouter>

    <App/>
    </BrowserRouter>,




//it will grab the root element from the public folder of index.html file
document.getElementById('root')


)