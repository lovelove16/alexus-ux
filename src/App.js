import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from "react-router-dom";
import { UserProvider } from "./contexts/User/Index";
import Routes from "./routes/Routes";
import cookies from 'react-cookies';
import Header from './components/Header/Header';
import history from './history';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: cookies.load('user')
    }
  }

  setUser = (data) => {
    console.log(data);
    this.setState({
      user: data
    }, () => {
      console.log(this.state.user)
    });
  }
  

  // componentDidMount(){
  //   if(this.state.user) {
  //     socket().on(`users/${this.state.user.id}`, (data) => {
  //       console.log(data);
  //       cookies.save('user', {
  //         ...this.state.user,
  //         ...data
  //       }, {path: '/'});
  //       console.log(cookies.load('user'))
  //       // this.setUser(cookies.load('user'));
  //       this.setState({
  //         user: cookies.load('user')
  //       })
  //     })
  //   }
  // }


  render() {
    return (
      <Router history={history}>
        <UserProvider value={{
          user: this.state.user,
          setUser: this.setUser
        }}>
          <div className="App">
            <div className="wrapper">
              { this.state.user && <Header /> }
                <Routes />
              {/* <Footer /> */}
            </div>
          </div>
        </UserProvider>
      </Router>
    );
  }
}

export default App;
