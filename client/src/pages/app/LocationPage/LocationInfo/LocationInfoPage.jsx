import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUrl } from '../../../../redux/Auth/user.actions';
import { acGetLocationInfo } from '../../../../redux/Location/location.action';
import ContainerHeader from '../../../../components/ContainerHeader';
import { PageEl } from '../../../../Styles/Elements/ToolsEl';
import InfoCop from './InfoCop';
import LocationPalletTable from './LocationPalletTable';
import Charts from '../../Pallete/Charts';
import styled from 'styled-components';

class LocationInfoPage extends Component {
  componentDidMount() {
    this.props.setUrl(this.props.match.path);
    this.getLocationInfo();
  }
  getLocationInfo = () => {
    let body = {
      fullName: this.props.match.params.location
    };
    this.props.acGetLocationInfo(body);
  };
  render() {
    return (
      <PageElEl>
        <ContainerHeader match={this.props.match} title={`Location Info`} />
        {this.props.data && <InfoCop data={this.props.data} />}
        <Charts title="Location life activity" />
        {this.props.data && <LocationPalletTable data={this.props.data} />}
      </PageElEl>
    );
  }
}

const mapStateToProps = state => ({
  data: state.locationReducer.locationInfo
});

const mapDispatchToProps = { setUrl, acGetLocationInfo };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationInfoPage);

const PageElEl = styled(PageEl)`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, auto);
  grid-template-areas:
    'ContainerHeader    ContainerHeader'
    'InfoCop            Charts'
    'LocationPalletTable         LocationPalletTable';
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, auto);
    grid-template-areas:
      'ContainerHeader'
      'InfoCop'
      'Charts'
      'LocationPalletTable';
  }
`;
