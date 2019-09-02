import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUrl } from '../../../redux/Auth/user.actions';
import {
  infoMsgBar,
  warningMsgBar
} from '../../../redux/Notification/notification.actions';
import {
  deleteLocation,
  updateSizeLocation
} from '../../../redux/Location/location.action';
import ContainerHeader from '../../../components/ContainerHeader';
import { PageEl } from '../../../Styles/Elements/ToolsEl';
import SearchForm from './SearchForm';
import SearchTable from './SearchTable';
import LocatonCreatDialog from './LocationCreate/LocatonCreatDialog';

class LocationPage extends Component {
  state = {
    dialogLocation: '',
    dialogSize: 100,
    dialogStatus: 100,
    open: false
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handelEditOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    this.props.setUrl(this.props.match.path);
  }

  handedSize = () => {
    this.props.infoMsgBar('Sized Edit to database');
    this.props.updateSizeLocation(
      this.state.dialogLocation,
      this.state.dialogSize,
      this.state.dialogStatus,
      () => {
        console.log('state', this.state);
      }
    );
    this.setState({ open: false });
  };

  handedDelete = () => {
    this.props.warningMsgBar('Start to  delete location from the database');
    this.props.deleteLocation(this.state.dialogLocation, () =>
      console.log('good')
    );
    this.setState({ open: false });
  };

  getEditFormCreat = (fullName, maxSize, status) => {
    this.setState({
      dialogLocation: fullName,
      dialogSize: maxSize,
      dialogStatus: status,
      open: true
    });
  };

  render() {
    return (
      <PageEl>
        <ContainerHeader
          match={this.props.match}
          title={'Search For Locations'}
        />
        <SearchForm />
        <SearchTable getEditFormCreat={this.getEditFormCreat} />
        <LocatonCreatDialog
          {...this.state}
          handelEditOnChange={this.handelEditOnChange}
          handleClose={this.handleClose}
          handedSize={this.handedSize}
          handedDelete={this.handedDelete}
        />
      </PageEl>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  setUrl,
  infoMsgBar,
  updateSizeLocation,
  deleteLocation,
  warningMsgBar
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationPage);
