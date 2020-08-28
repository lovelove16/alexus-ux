import React, { Component } from 'react';
import history from '../../history';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../../contexts/User/Index';
// import NotFoundPage from '../../pages/404/404';

class UserRoute extends Component {
    static contextType = UserContext;
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
    }
    
    render() {
        if (this.context.user) {
            return <Route {...this.props}></Route>
        } 
        return <Redirect to={'/login' + (this.props.path ? `?redirectPath=${this.props.path}` : '')} />
    }
}

export default UserRoute;