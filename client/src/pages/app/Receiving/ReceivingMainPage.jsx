import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUrl } from '../../../redux/Auth/user.actions';
// import { acQueryItem } from '../../../redux/Item/item.action';
// import { warningMsgBar } from '../../../redux/Notification/notification.actions';
import ContainerHeader from '../../../components/ContainerHeader';
import { PageEl } from '../../../Styles/Elements/ToolsEl';
import AddPalletForm from './AddPalletForm';
import ReceivingTable from './ReceivingTable';
import SentToLocation from './sentToLocation/SentToLocation';

class ReceivingMainPage extends Component {
  componentDidMount() {
    this.props.setUrl(this.props.match.path);
  }

  render() {
    return (
      <PageEl>
        <ContainerHeader match={this.props.match} title={'Receiving'} />
        <AddPalletForm />
        <ReceivingTable />
        <SentToLocation />
      </PageEl>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  setUrl
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReceivingMainPage);
