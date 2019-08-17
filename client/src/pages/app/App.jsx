import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import SecretoPage from './SecretoPage';

export class AppMainRoute extends Component {
  render() {
    const { match } = this.props;
    return (
      <>
        <Route exact path={`${match.path}`} component={SecretoPage} />
      </>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppMainRoute);
