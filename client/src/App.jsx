import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Landing from './components/pages/Landing';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './components/pages/auth/Register';
import Login from './components/pages/auth/Login';
import { Provider } from 'react-redux';
import store from './store/store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './util/setAuthToken';
import { acSetCurrentUser,acLogoutUser } from './store/actions/authActions';

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);

  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(acSetCurrentUser(decoded));

  const currentTime = Date.now / 1000
  if(decoded.exp < currentTime){
    store.dispatch(acLogoutUser())

    window.location.href = '/login'
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='App'>
            <Navbar />
            <Route exact path='/' component={Landing} />
            <div className='container'>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
