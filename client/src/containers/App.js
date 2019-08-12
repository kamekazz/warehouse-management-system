import React, {Component} from 'react';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import MomentUtils from '@date-io/moment';
import {MuiPickersUtilsProvider} from 'material-ui-pickers';
import {Redirect, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {IntlProvider} from 'react-intl'
import "assets/vendors/style"
import defaultTheme from './themes/defaultTheme';
import AppLocale from '../lngProvider';

import MainApp from 'app/index';
import SignIn from './SignIn';
import SignUp from './SignUp';
import {getUser, setInitUrl} from '../actions/Auth';
import RTL from 'util/RTL';
import axios from 'util/Api';
import asyncComponent from 'util/asyncComponent';

const RestrictedRoute = ({component: Component, token, ...rest}) =>
  <Route
    {...rest}
    render={props =>
      token
        ? <Component {...props} />
        : <Redirect
          to={{
            pathname: '/signin',
            state: {from: props.location}
          }}
        />}
  />;

class App extends Component {

  componentWillMount() {
    window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
    if (this.props.initURL === '') {
      this.props.setInitUrl(this.props.history.location.pathname);
    }
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.token) {
      axios.defaults.headers.common['Authorization'] = "Bearer " + nextProps.token;
    }
    if (nextProps.token && !nextProps.authUser) {
      this.props.getUser()

    }
  }
  render() {
    const {match, location, locale, token, initURL, isDirectionRTL} = this.props;
    if (location.pathname === '/') {
      if (token === null) {
        return ( <Redirect to={'/signin'}/> );
      } else if (initURL === '' || initURL === '/' || initURL === '/signin') {
        return ( <Redirect to={'/app/sample-page'}/> );
      } else {
        return ( <Redirect to={initURL}/> );
      }
    }
    const applyTheme = createMuiTheme(defaultTheme);

    if (isDirectionRTL) {
      applyTheme.direction = 'rtl';
      document.body.classList.add('rtl')
    } else {
      document.body.classList.remove('rtl');
      applyTheme.direction = 'ltr';
    }

    const currentAppLocale = AppLocale[locale.locale];
    return (
      <MuiThemeProvider theme={applyTheme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <IntlProvider
            locale={currentAppLocale.locale}
            messages={currentAppLocale.messages}>
            <RTL>
              <div className="app-main">
                <Switch>
                  <RestrictedRoute path={`${match.url}app`} token={token}
                                   component={MainApp}/>
                  <Route path='/signin' component={SignIn}/>
                  <Route path='/signup' component={SignUp}/>
                  <Route
                    component={asyncComponent(() => import('components/Error404'))}/>
                </Switch>
              </div>
            </RTL>
          </IntlProvider>
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = ({settings, auth}) => {
  const {sideNavColor, locale, isDirectionRTL} = settings;
  const {authUser, token, initURL} = auth;
  return {sideNavColor, token, locale, isDirectionRTL, authUser, initURL}
};

export default connect(mapStateToProps, {setInitUrl, getUser})(App);

