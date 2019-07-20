import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { acLogoutUser } from '../../store/actions/authActions';

class Navbar extends Component {
  onLogout = e => {
    e.preventDefault();
    this.props.acLogoutUser();
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className='navbar-nav ml-auto'>
        <li className='nav-item'>
          <div   onClick={this.onLogout} className='nav-link'>
            <img className='rounded-circle' src={user.avatar} style={{ width:'25px',marginRight:'5px'}} alt={user.name}   />
            Logout
          </div>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className='navbar-nav ml-auto'>
        <li className='nav-item'>
          <Link className='nav-link' to='/register'>
            Sign Up
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/login'>
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark mb-4'>
        <div className='container'>
          <a className='navbar-brand' href='landing.html'>
            DevConnector
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#mobile-nav'
          >
            <span className='navbar-toggler-icon' />
          </button>

          <div className='collapse navbar-collapse' id='mobile-nav'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <a className='nav-link' href='profiles.html'>
                  {' '}
                  Developers
                </a>
              </li>
            </ul>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { acLogoutUser }
)(Navbar);
