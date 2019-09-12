import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUrl } from '../../../../../redux/Auth/user.actions';
import { acQueryItem } from '../../../../../redux/Item/item.action';
import { warningMsgBar } from '../../../../../redux/Notification/notification.actions';
import ContainerHeader from '../../../../../components/ContainerHeader';
import { PageEl } from '../../../../../Styles/Elements/ToolsEl';
import InfoCop from './InfoCop';

class ProductOnePage extends Component {
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
    return (
      <PageEl>
        <ContainerHeader match={this.props.match} title={`Product Info`} />
        {product && <InfoCop data={product} />}
      </PageEl>
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
