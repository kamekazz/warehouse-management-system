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
import PutAway from './PutAway/PutAway';
import PalletPage from './Pallete/PalletPage';

export class AppMainRoute extends Component {
  render() {
    const { match } = this.props;
    return (
      <LayoutCop>
        <Switch>
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
            path={`${match.path}/product/create`}
            component={ProductCreatePage}
          />
          <Route
            exact
            path={`${match.path}/product/:id`}
            component={ProductOnePage}
          />
          <Route
            exact
            path={`${match.path}/receiving`}
            component={ReceivingMainPage}
          />
          <Route
            exact
            path={`${match.path}/receiving/put-away`}
            component={PutAway}
          />
          <Route
            exact
            path={`${match.path}/pallet/:id`}
            component={PalletPage}
          />
        </Switch>
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
