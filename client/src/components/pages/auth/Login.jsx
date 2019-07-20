import React, { Component } from 'react';
import { connect } from 'react-redux';
import { acLoginUser } from '../../../store/actions/authActions';

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('dashboard');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push('dashboard');
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.acLoginUser(this.state);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className='login'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <h1 className='display-4 text-center'>Log In</h1>
              <p className='lead text-center'>
                Sign in to your DevConnector account
              </p>
              <form onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='email'
                    className={`form-control form-control-lg ${errors.email &&
                      'is-invalid'}`}
                    placeholder='Email Address'
                    name='email'
                    onChange={this.onChange}
                    value={this.state.email}
                  />
                  {errors.email && (
                    <div className='invalid-feedback'>{errors.email}</div>
                  )}
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    className={`form-control form-control-lg ${errors.password &&
                      'is-invalid'}`}
                    placeholder='Password'
                    name='password'
                    onChange={this.onChange}
                    value={this.state.password}
                  />
                  {errors.password && (
                    <div className='invalid-feedback'>{errors.password}</div>
                  )}
                </div>
                <input type='submit' className='btn btn-info btn-block mt-4' />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { acLoginUser }
)(Login);
