import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import SecretoPage from './SecretoPage';
import SecretoPage2 from './SecretoPage copy';

export class AppMainRoute extends Component {
  render() {
    const { match } = this.props;
    return (
      <>
        <Route exact path={`${match.path}`} component={SecretoPage} />
        <Route exact path={`${match.path}/2`} component={SecretoPage2} />
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
