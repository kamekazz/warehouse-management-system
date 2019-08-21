import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUrl } from '../../redux/Auth/user.actions';
import ContainerHeader from '../../components/ContainerHeader';
import { PageEl } from '../../Elements/ToolsEl';
import LocationForm from './LocationcreateForm';

export class LocationCreatePage extends Component {
  state = {
    zone: 'a',
    row: 0,
    location: 0,
    size: 0,
    buttonDisable: true,
    search: false
  };
  handalchanga = (name, value) => {
    this.setState({ [name]: value });
  };
  componentDidMount() {
    this.props.setUrl(this.props.match.path);
  }
  handelCancel = () => {
    this.setState({
      zone: 'a',
      row: 0,
      location: 0,
      size: 0,
      buttonDisable: true
    });
  };
  render() {
    console.log('state', this.state);
    return (
      <PageEl>
        <ContainerHeader match={this.props.match} title={'Create'} />
        <LocationForm
          handelCancel={this.handelCancel}
          handalchanga={this.handalchanga}
        />
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
)(LocationCreatePage);
