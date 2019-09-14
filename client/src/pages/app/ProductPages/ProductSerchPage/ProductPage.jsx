import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUrl } from '../../../../redux/Auth/user.actions';
import { warningMsgBar } from '../../../../redux/Notification/notification.actions';
import { acQueryItem } from '../../../../redux/Item/item.action';
import ContainerHeader from '../../../../components/ContainerHeader';
import { PageEl } from '../../../../Styles/Elements/ToolsEl';
import ProductTable from './ProductTable';
import SearchFrom from './SearchFrom';
import _ from 'lodash';
import { hpGoToInput } from '../../../../util/helper';

export class ProductPage extends Component {
  state = {
    skuNumber: ''
  };
  componentDidMount() {
    this.props.setUrl(this.props.match.path);
    this.search();
  }

  updateTextField = (name, value, length) => {
    if (value.length <= length) {
      //Update your state
      this.setState({ [name]: value });
      this.search();
    } else {
      // Value length is biggest than 12
      this.props.warningMsgBar(`Value length is biggest than ${length}`);
    }
  };

  search = _.debounce(() => {
    let body = {};
    body.skuNumber = this.state.skuNumber;
    this.props.acQueryItem(body);
  }, 2000);

  render() {
    return (
      <PageEl>
        <ContainerHeader
          match={this.props.match}
          title={'Search For Products'}
        />
        <SearchFrom
          updateTextField={this.updateTextField}
          skuNumber={this.state.skuNumber}
        />
        <ProductTable />
      </PageEl>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  setUrl,
  warningMsgBar,
  acQueryItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage);
