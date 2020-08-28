import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Login from '../pages/LogIn/Login';
import Home from '../pages/Home/Home';
import UserRoute from '../components/protected-routes/UserRoute';

function Routes() {
        return (
            <Switch>
                <UserRoute path="/" exact component={Home} />
                <Route path="/login" component={Login} />
            </Switch>
        );
}

export default Routes;