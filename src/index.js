import React from 'react';
import ReactDOM from 'react-dom';

import Login from './screens/Login/Login';
import Home from './screens/Home/Home';

import { BrowserRouter, Switch, Route} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/home" component={Home} />
            <Route path="*" component={Login} />
        </Switch>
    </BrowserRouter>
, document.getElementById('root'));