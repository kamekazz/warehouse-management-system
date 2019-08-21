import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUrl } from '../../redux/Auth/user.actions';
import { warningMsgBar } from '../../redux/Notification/notification.actions';
import { createLocation } from '../../redux/Location/location.action';
import ContainerHeader from '../../components/ContainerHeader';
import { PageEl } from '../../Elements/ToolsEl';
import LocationForm from './LocationcreateForm';

export class LocationCreatePage extends Component {
  state = {
    zone: 0,
    row: 0,
    location: 0,
    level: 0,
    size: 100,
    buttonDisable: true,
    search: false
  };

  componentDidMount() {
    this.props.setUrl(this.props.match.path);
  }
  handelCancel = () => {
    this.setState({
      zone: 0,
      row: 0,
      location: 0,
      level: 0,
      size: 100,
      buttonDisable: true
    });
  };
  onSubmitFrom = e => {
    e.preventDefault();
    this.props.createLocation(this.state);
    this.handelCancel();
  };
  buttonChange = () => {
    const { row, zone, location, level, size } = this.state;
    if (zone.length >= 1) {
      if (row >= 0) {
        if (location >= 0) {
          if (level >= 0) {
            if (size >= 0) {
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
      </PageEl>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  setUrl,
  warningMsgBar,
  createLocation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationCreatePage);
