import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from '../pages/home';
import Profile from '../pages/profile';
import Network from '../pages/network';
import Messages from '../pages/messages';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/network" component={Network} />
            <Route path="/messages" component={Messages} />
            <Redirect from="*" to="/" />
        </Switch>
    </BrowserRouter>
);