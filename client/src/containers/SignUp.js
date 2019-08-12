import React from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import IntlMessages from 'util/IntlMessages';
import InfoView from 'components/InfoView';
import {userSignUp} from '../actions/Auth';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  componentDidUpdate() {
    if (this.props.showMessage) {
      setTimeout(() => {
        this.props.hideMessage();
      }, 3000);
    }
    if (this.props.authUser !== null) {
      this.props.history.push('/');
    }
  }

  render() {
    const {name, email, password} = this.state;
    return (
      <div
        className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
        <div className="app-login-main-content">
          <div className="app-logo-content d-flex align-items-center justify-content-center">
            <Link className="logo-lg" to="/" title="Jambo">
              <img src={require("assets/images/logo.png")} alt="jambo" title="jambo"/>
            </Link>
          </div>

          <div className="app-login-content">
            <div className="app-login-header">
              <h1>Sign Up</h1>
            </div>

            <div className="mb-4">
              <h2><IntlMessages id="appModule.createAccount"/></h2>
            </div>

            <div className="app-login-form">
              <form method="post" action="/">
                <TextField
                  type="text"
                  label="Name"
                  onChange={(event) => this.setState({name: event.target.value})}
                  fullWidth
                  defaultValue={name}
                  margin="normal"
                  className="mt-0 mb-2"
                />

                <TextField
                  type="email"
                  onChange={(event) => this.setState({email: event.target.value})}
                  label={<IntlMessages id="appModule.email"/>}
                  fullWidth
                  defaultValue={email}
                  margin="normal"
                  className="mt-0 mb-2"
                />

                <TextField
                  type="password"
                  onChange={(event) => this.setState({password: event.target.value})}
                  label={<IntlMessages id="appModule.password"/>}
                  fullWidth
                  defaultValue={password}
                  margin="normal"
                  className="mt-0 mb-4"
                />

                <div className="mb-3 d-flex align-items-center justify-content-between">
                  <Button variant="contained" onClick={() => {
                    this.props.userSignUp({name, email, password});
                  }} color="primary">
                    <IntlMessages
                      id="appModule.regsiter"/>
                  </Button>
                  <Link to="/signin">
                    <IntlMessages id="signUp.alreadyMember"/>
                  </Link>
                </div>

              </form>
            </div>
          </div>

        </div>
        <InfoView/>
      </div>
    )
  }
}

const mapStateToProps = ({auth}) => {
  const {authUser} = auth;
  return {authUser}
};

export default connect(mapStateToProps, {userSignUp})(SignUp);
