import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import { request } from '../../constants/constants';
import cookie  from 'react-cookies';
import '../../App.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleFormSubmit = e => {
        e.preventDefault();
        this.setState({
            isLoading: true
        })
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        request('POST', '/auth/login', data, false).then(res => {
            this.setState({
                isLoading: false
            })
            console.log(res);
            cookie.save('user', res.data, {path: '/'});
            window.location.href = "/";
        }).catch(err => {
            console.error(err.response);
            this.setState({
                isLoading: false,
                error: err.response.data
            })
        })
    }

    render() {
        return (
            <div className="LoginForm">
                   <form onSubmit={this.handleFormSubmit}>
                    <h1>LOGIN FORM</h1>
                    <FormGroup>
                        <FormControl
                        placeholder="Email"
                        aria-label="Email"
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormControl
                        placeholder="Password"
                        aria-label="Password"
                        type="text"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        />
                    </FormGroup>
                      <button type="submit" className="btn btn-primary btn-block">Login</button>
                    </form>
            </div>
        );
    }
}

export default Login;