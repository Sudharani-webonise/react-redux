import React from 'react';
import { Router,  Route, IndexRoute } from 'react-router';
import Main from './main';
import NotFound from './components/notFound';
import Home from './components/home';

const ROUTS = (
    <Route path='/'>
        <IndexRoute component={Main} />
        <Route path='/home' component={Home} />
        <Route path='*' component={() => (<NotFound status='404' />)} />
    </Route>
)

export default ROUTS;
