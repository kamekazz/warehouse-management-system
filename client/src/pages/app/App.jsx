import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import LayoutCop from '../../Layout/LayoutCop';
import LocationPage from './LocationPage/LocationPage';
import ProductPage from '../app/ProductPage';
import SecretorPage from '../app/SecretoPage';
import LocationCreatePage from './LocationCreate/LocationCreatePage';

export class AppMainRoute extends Component {
  render() {
    const { match } = this.props;

    return (
      <Switch>
        <LayoutCop>
          <Route exact path={`${match.path}`} component={SecretorPage} />
          <Route
            exact
            path={`${match.path}/location`}
            component={LocationPage}
          />
          <Route
            exact
            path={`${match.path}/location/create`}
            component={LocationCreatePage}
          />
          <Route exact path={`${match.path}/product`} component={ProductPage} />
        </LayoutCop>
      </Switch>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppMainRoute);
