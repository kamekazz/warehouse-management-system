import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUrl } from '../../../redux/Auth/user.actions';
import { acPalletInfo } from '../../../redux/Pallet/pallet.action';
import { warningMsgBar } from '../../../redux/Notification/notification.actions';
import ContainerHeader from '../../../components/ContainerHeader';
import { PageEl } from '../../../Styles/Elements/ToolsEl';
import PalletInfoCop from './PalletInfoCop';
import HistoryCop from '../../../components/HistoryCop';
import styled from 'styled-components';
import Charts from './Charts';

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
      <PageElEl>
        <ContainerHeader match={this.props.match} title={`Pallet Info`} />
        <MainContent>
          {this.state.data && <PalletInfoCop data={this.state.data} />}
          <Charts />
          <HistoryCop />
        </MainContent>
      </PageElEl>
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

const PageElEl = styled(PageEl)`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(1, 1fr);
  grid-template-areas:
    'ContainerHeader'
    'MainContent';
  @media (max-width: 600px) {
    grid-gap: 12px;
  }
`;

const MainContent = styled.main`
  grid-area: MainContent;
  display: grid;
  width: 100%;
  grid-gap: 20px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-areas: 'PalletInfoCop PalletInfoCop PalletInfoCop HistoryCop HistoryCop HistoryCop Charts Charts Charts Charts Charts Charts';
  @media (max-width: 1200px) {
    grid-template-areas:
      'PalletInfoCop PalletInfoCop PalletInfoCop PalletInfoCop . . . HistoryCop HistoryCop HistoryCop HistoryCop HistoryCop'
      'Charts Charts Charts Charts Charts Charts Charts Charts Charts Charts Charts Charts';
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 12px;
    grid-template-areas:
      'PalletInfoCop'
      'HistoryCop'
      'Charts';
  }
`;
