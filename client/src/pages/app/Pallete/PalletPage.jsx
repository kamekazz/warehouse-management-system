// 5d71b7298c8b480bf058ae7b
// ${this.props.match.params.id}`}
// http://localhost:3000/app/pallet/5d71b7298c8b480bf058ae7b
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUrl } from '../../../redux/Auth/user.actions';
import { acPalletInfo } from '../../../redux/Pallet/pallet.action';
import { warningMsgBar } from '../../../redux/Notification/notification.actions';
import ContainerHeader from '../../../components/ContainerHeader';
import { PageEl } from '../../../Styles/Elements/ToolsEl';
import PalletInfoCop from './PalletInfoCop';

class PalletPage extends Component {
  state = {
    data: null
  };
  componentDidMount() {
    this.props.setUrl(this.props.match.path);
    this.getInfo();
  }
  getInfo = () => {
    const { id } = this.props.match.params;
    this.props.acPalletInfo(id, data => {
      this.setState({ data });
    });
  };
  render() {
    return (
      <PageEl>
        <ContainerHeader match={this.props.match} title={`Pallet Info`} />
        {this.state.data && <PalletInfoCop data={this.state.data} />}
      </PageEl>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  setUrl,
  warningMsgBar,
  acPalletInfo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PalletPage);
