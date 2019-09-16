import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUrl } from '../../../redux/Auth/user.actions';
import ContainerHeader from '../../../components/ContainerHeader';
import { PageEl } from '../../../Styles/Elements/ToolsEl';
import AddPalletForm from './AddPalletForm';
import ReceivingTable from './ReceivingTable';
import SentToLocation from './sentToLocation/SentToLocation';
import LocationChart from './LocationChart';
import PalletChart from './PalletChart';
import styled from 'styled-components';

class ReceivingMainPage extends Component {
  componentDidMount() {
    this.props.setUrl(this.props.match.path);
  }

  render() {
    return (
      <PageElEl>
        <ContainerHeader match={this.props.match} title={'Receiving'} />
        <MainContent>
          <AddPalletForm />
          <LocationChart />
          <PalletChart />
          <ReceivingTable />
        </MainContent>
        <SentToLocation />
      </PageElEl>
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
  grid-template-columns: repeat(3, auto);
  grid-template-areas:
    'AddPalletForm LocationChart PalletChart'
    'ReceivingTable ReceivingTable ReceivingTable';
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, auto);
    grid-template-areas:
      'AddPalletForm  .'
      'LocationChart PalletChart'
      'ReceivingTable ReceivingTable';
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 12px;
    grid-template-areas:
      'AddPalletForm'
      'LocationChart'
      'PalletChart'
      'ReceivingTable';
  }
`;
