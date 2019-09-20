import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUrl } from '../../../../../redux/Auth/user.actions';
import { acQueryItem } from '../../../../../redux/Item/item.action';
import { warningMsgBar } from '../../../../../redux/Notification/notification.actions';
import ContainerHeader from '../../../../../components/ContainerHeader';
import { PageEl } from '../../../../../Styles/Elements/ToolsEl';
import InfoCop from './InfoCop';
import AllPallets from './AllPallets';
import HistoryCop from '../../../../../components/HistoryCop';
import styled from 'styled-components';

class ProductOnePage extends Component {
  state = {
    allPalletData: []
  };
  componentDidMount() {
    this.props.setUrl(this.props.match.path);
    this.getInfo();
  }

  getInfo = () => {
    const skuNumber = this.props.match.params;
    this.props.acQueryItem(skuNumber);
  };

  render() {
    const product = this.props.products[0];
    const skuNumber = this.props.match.params;

    return (
      <PageElEl>
        <ContainerHeader match={this.props.match} title={`Product Info`} />

        {product && <InfoCop data={product} />}
        <HistoryCop />
        <AllPallets skuNumber={skuNumber} />
      </PageElEl>
    );
  }
}

const mapStateToProps = state => ({
  products: state.itemReducer.itemArray
});

const mapDispatchToProps = {
  setUrl,
  warningMsgBar,
  acQueryItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductOnePage);

const PageElEl = styled(PageEl)`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, auto);
  grid-template-areas:
    'ContainerHeader    ContainerHeader'
    'InfoCop            AllPallets'
    'HistoryCop         AllPallets';
  @media (max-width: 600px) {
    grid-gap: 12px;
  }
`;
