import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './views/Main';
import Principal from './views/principal/Principal';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/principal" component={Principal} />
            <Route path="/" component={Main} />
        </Switch>
    </BrowserRouter>, document.getElementById('root'));