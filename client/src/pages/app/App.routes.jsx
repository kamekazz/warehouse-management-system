import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import LayoutCop from '../../Layout/LayoutCop';
import LocationPage from './LocationPage/LocationPage';
import ProductPage from '../app/ProductPages/ProductSerchPage/ProductPage';
import LocationCreatePage from './LocationPage/LocationCreate/LocationCreatePage';
import ProductCreatePage from './ProductPages/ProductCreactPage/ProductCreatePage';
import ProductOnePage from './ProductPages/ProductSerchPage/ProductOnePage';
import ReceivingMainPage from './Receiving/ReceivingMainPage';

export class AppMainRoute extends Component {
  render() {
    const { match } = this.props;
    return (
      <Switch>
        <LayoutCop>
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
          <Route
            exact
            path={`${match.path}/product/:id`}
            component={ProductOnePage}
          />
          <Route
            exact
            path={`${match.path}/product/create`}
            component={ProductCreatePage}
          />
          <Route
            exact
            path={`${match.path}/receiving`}
            component={ReceivingMainPage}
          />
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
