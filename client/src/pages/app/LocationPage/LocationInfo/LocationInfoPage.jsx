import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUrl } from '../../../../redux/Auth/user.actions';
import { acGetLocationInfo } from '../../../../redux/Location/location.action';
import ContainerHeader from '../../../../components/ContainerHeader';
import { PageEl } from '../../../../Styles/Elements/ToolsEl';
import InfoCop from './InfoCop';

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
    console.log('object', this.props.match.params.location);
    return (
      <PageEl>
        <ContainerHeader match={this.props.match} title={`Location Info`} />;
        <InfoCop />
      </PageEl>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = { setUrl, acGetLocationInfo };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationInfoPage);
