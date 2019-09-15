import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUrl } from '../../../../redux/Auth/user.actions';
import { acGetLocationInfo } from '../../../../redux/Location/location.action';
import ContainerHeader from '../../../../components/ContainerHeader';
import { PageEl } from '../../../../Styles/Elements/ToolsEl';
import InfoCop from './InfoCop';
import LocationPalletTable from './LocationPalletTable';

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
      <PageEl>
        <ContainerHeader match={this.props.match} title={`Location Info`} />
        {this.props.data && <InfoCop data={this.props.data} />}
        {this.props.data && <LocationPalletTable data={this.props.data} />}
      </PageEl>
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
