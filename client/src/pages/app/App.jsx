import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import LayoutCop from '../../Layout/LayoutCop';
import LocationPage from '../app/LocationPage';
import ProductPage from '../app/ProductPage';
import SecretorPage from '../app/SecretoPage';
import LocationCreatePage from './LocationCreatePage';

export class AppMainRoute extends Component {
  render() {
    const { match } = this.props;

    return (
      <LayoutCop>
        <Route exact path={`${match.path}`} component={SecretorPage} />
        <Route exact path={`${match.path}/location`} component={LocationPage} />
        <Route
          exact
          path={`${match.path}/location/create`}
          component={LocationCreatePage}
        />
        <Route exact path={`${match.path}/product`} component={ProductPage} />
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
