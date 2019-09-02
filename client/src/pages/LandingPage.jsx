import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from '../redux/history';

class LandingPage extends Component {
  componentDidMount() {
    this.IsAuthenticatedReroute();
  }
  IsAuthenticatedReroute = () => {
    if (this.props.auth) {
      history.push('/app');
    }
  };

  render() {
    return <div>LandingPage</div>;
  }
}

const mapStateToProps = state => ({
  auth: state.auth.isAuthenticated
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
