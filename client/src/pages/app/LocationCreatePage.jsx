import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUrl } from '../../redux/Auth/user.actions';
import { warningMsgBar } from '../../redux/Notification/notification.actions';
import ContainerHeader from '../../components/ContainerHeader';
import { PageEl } from '../../Elements/ToolsEl';
import LocationForm from './LocationcreateForm';

export class LocationCreatePage extends Component {
  state = {
    zone: 'a',
    row: '',
    location: '',
    level: '',
    size: '',
    buttonDisable: true,
    search: false
  };

  componentDidMount() {
    this.props.setUrl(this.props.match.path);
  }
  handelCancel = () => {
    this.setState({
      zone: 'a',
      row: '',
      location: '',
      level: '',
      size: '',
      buttonDisable: true
    });
  };
  buttonChange = () => {
    const { row, zone, location, level, size } = this.state;
    if (zone.length >= 1) {
      if (row >= 1) {
        if (location >= 1) {
          if (level >= 1) {
            if (size >= 1) {
              this.setState({ buttonDisable: false });
              console.log('object');
            } else {
              console.log('this.state', this.state);
            }
          } else {
            console.log('this.state', this.state);
          }
        } else {
          console.log('this.state', this.state);
        }
      } else {
        console.log('this.state', this.state);
      }
    } else {
      console.log('this.state', this.state);
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
        />
      </PageEl>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  setUrl,
  warningMsgBar
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationCreatePage);
