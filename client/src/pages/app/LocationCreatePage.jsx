import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUrl } from '../../redux/Auth/user.actions';
import {
  warningMsgBar,
  infoMsgBar
} from '../../redux/Notification/notification.actions';
import {
  createLocation,
  getCreateLocation
} from '../../redux/Location/location.action';

import ContainerHeader from '../../components/ContainerHeader';
import { PageEl } from '../../Elements/ToolsEl';
import LocationForm from './LocationcreateForm';
import LocationTable from '../../components/LocationTable';
import LocationCreatDialog from './LocatonCreatDialog';

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
    open: false
  };

  componentDidMount() {
    this.props.setUrl(this.props.match.path);
    this.props.getCreateLocation(this.addTableData);
  }

  //dialog Form get
  getEditFormCreat = (fullName, maxSize) => {
    this.setState({
      dialogLocation: fullName,
      dialogSize: maxSize,
      open: true
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handelEditOnChange = text => {
    this.setState({ dialogSize: text });
  };

  handedSize = () => {
    this.props.infoMsgBar('Sized Edit to database');
    this.setState({ open: false });
  };

  handedDelete = () => {
    this.props.warningMsgBar('delete location from the database');
    this.setState({ open: false });
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

  addTableData = data => {
    this.setState({ tableData: data });
    console.log('this.state.ta', this.state.tableData);
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
      <PageEl>
        <ContainerHeader match={this.props.match} title={'Create'} />
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
      </PageEl>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  setUrl,
  warningMsgBar,
  createLocation,
  infoMsgBar,
  getCreateLocation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationCreatePage);
