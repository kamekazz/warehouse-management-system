import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUrl } from '../../../../redux/Auth/user.actions';
import {
  warningMsgBar,
  infoMsgBar
} from '../../../../redux/Notification/notification.actions';
import {
  createLocation,
  getCreateLocation,
  deleteLocation,
  updateSizeLocation
} from '../../../../redux/Location/location.action';

import ContainerHeader from '../../../../components/ContainerHeader';
import { PageEl } from '../../../../Styles/Elements/ToolsEl';
import LocationForm from './LocationcreateForm';
import LocationTable from './LocationTable';
import LocationCreatDialog from './LocatonCreatDialog';
import styled from 'styled-components';

export class LocationCreatePage extends Component {
  state = {
    zone: '',
    row: 0,
    location: 0,
    level: 0,
    size: 100,
    buttonDisable: true,
    search: false,
    tableData: [],
    dialogLocation: '',
    dialogSize: 100,
    dialogStatus: 100,
    open: false
  };

  componentDidMount() {
    this.props.setUrl(this.props.match.path);
    this.props.getCreateLocation(this.addTableData);
  }
  //table function
  addTableData = data => {
    this.setState({ tableData: data });
  };

  //dialog Form get
  getEditFormCreat = (fullName, maxSize, status) => {
    this.setState({
      dialogLocation: fullName,
      dialogSize: maxSize,
      dialogStatus: status,
      open: true
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handelEditOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handedSize = () => {
    this.props.infoMsgBar('Sized Edit to database');
    this.props.updateSizeLocation(
      this.state.dialogLocation,
      this.state.dialogSize,
      this.state.dialogStatus,
      this.upDateTableData
    );
    this.setState({ open: false });
  };

  handedDelete = () => {
    this.props.warningMsgBar('Start to  delete location from the database');
    this.props.deleteLocation(this.state.dialogLocation, this.upDateTableData);
    this.setState({ open: false });
  };

  upDateTableData = () => {
    this.props.getCreateLocation(this.addTableData);
  };

  //

  handelCancel = () => {
    this.setState({
      zone: '',
      row: '',
      location: '',
      level: '',
      size: '',
      buttonDisable: true
    });
  };
  onSubmitFrom = e => {
    e.preventDefault();
    this.props.createLocation(this.state, this.addTableData);
    this.props.infoMsgBar(`location bine crate`);
    this.handelCancel();
  };

  buttonChange = () => {
    const { row, zone, location, level, size } = this.state;
    if (zone.length >= 1) {
      if (row.length >= 3) {
        if (location.length >= 4) {
          if (level.length >= 2) {
            if (size >= 1) {
              this.setState({ buttonDisable: false });
            } else {
              this.setState({ buttonDisable: true });
            }
          } else {
            this.setState({ buttonDisable: true });
          }
        } else {
          this.setState({ buttonDisable: true });
        }
      } else {
        this.setState({ buttonDisable: true });
      }
    } else {
      this.setState({ buttonDisable: true });
    }
  };

  updateTextField = (name, value, length) => {
    if (value.length <= length) {
      //Update your state
      this.setState({ [name]: value }, () => this.buttonChange());
    } else {
      //Value length is biggest than 12
      this.props.warningMsgBar(`Value length is biggest than ${length}`);
    }
  };
  render() {
    return (
      <PageElEl>
        <ContainerHeader
          match={this.props.match}
          title={'Create New Location'}
        />
        <LocationForm
          handelCancel={this.handelCancel}
          updateTextField={this.updateTextField}
          {...this.state}
          onSubmitFrom={this.onSubmitFrom}
        />
        <LocationTable
          getEditFormCreat={this.getEditFormCreat}
          data={this.state.tableData}
        />
        <LocationCreatDialog
          {...this.state}
          handelEditOnChange={this.handelEditOnChange}
          handleClose={this.handleClose}
          handedSize={this.handedSize}
          handedDelete={this.handedDelete}
        />
      </PageElEl>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  setUrl,
  warningMsgBar,
  createLocation,
  infoMsgBar,
  getCreateLocation,
  deleteLocation,
  updateSizeLocation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationCreatePage);

const PageElEl = styled(PageEl)`
  height: 100vh;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(1, auto);
  grid-template-areas:
    'ContainerHeader'
    'SearchForm'
    'SearchTable';
  @media (max-width: 600px) {
    grid-gap: 12px;
  }
`;
