import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import SecretoPage from './SecretoPage';
import LayoutCop from '../../Layout/LayoutCop';

export class AppMainRoute extends Component {
  render() {
    const { match } = this.props;
    return (
      <LayoutCop>
        <Route exact path={`${match.path}`} component={SecretoPage} />
      </LayoutCop>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppMainRoute);
