import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import { getUser } from './redux/Auth/user.actions';

import SignInPage from './pages/auth/SignInPage';
import SignUpPage from './pages/auth/SignUpPage';
import RegistrationPage from './pages/auth/Registration/RegistrationPage';
import Error404Page from './pages/Error404Page';
import AppMainRoute from './pages/app/App.routes';

import PrivateRoute from './components/PrivateRoute';
import LandingPage from './pages/LandingPage';
import setAuthToken from './util/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = props => {
  const { isAuthenticated } = props.auth;

  useEffect(() => {
    props.getUser();
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <PrivateRoute path="/app" component={AppMainRoute} />
      <Route
        path="/signin"
        render={routeProps =>
          isAuthenticated ? (
            <Redirect to="/app" />
          ) : (
            <SignInPage {...routeProps} />
          )
        }
      />
      <Route
        path="/signup"
        render={routeProps =>
          isAuthenticated ? (
            <Redirect to="/app" />
          ) : (
            <SignUpPage {...routeProps} />
          )
        }
      />
      <Route path="/registration" component={RegistrationPage} />
      <Route component={Error404Page} />
    </Switch>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = { getUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
