import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { acRegisterUser } from '../../../store/actions/authActions';

// import classnames from 'classnames';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {}
  };

  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push('dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.acRegisterUser(this.state, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className='register'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <h1 className='display-4 text-center'>Sign Up</h1>
              <p className='lead text-center'>
                Create your DevConnector account
              </p>
              <form onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    className={`form-control form-control-lg ${errors.name &&
                      'is-invalid'}`}
                    placeholder='Name'
                    name='name'
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                  {errors.name && (
                    <div className='invalid-feedback'>{errors.name}</div>
                  )}
                </div>
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
                  <small className='form-text text-muted'>
                    This site uses Gravatar so if you want a profile image, use
                    a Gravatar email
                  </small>
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
                <div className='form-group'>
                  <input
                    type='password'
                    className={`form-control form-control-lg ${errors.password2 &&
                      'is-invalid'}`}
                    placeholder='Confirm Password'
                    onChange={this.onChange}
                    value={this.state.password2}
                    name='password2'
                  />
                  {errors.password2 && (
                    <div className='invalid-feedback'>{errors.password2}</div>
                  )}
                </div>
                <button type='submit' className='btn btn-info btn-block mt-4'>
                  Submit
                </button>
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
  { acRegisterUser }
)(withRouter(Register));
