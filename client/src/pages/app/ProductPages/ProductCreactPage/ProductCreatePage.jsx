import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUrl } from '../../../../redux/Auth/user.actions';
import ContainerHeader from '../../../../components/ContainerHeader';
import { PageEl } from '../../../../Styles/Elements/ToolsEl';
import CreateProductForm from './CreateProductForm';
import CreateProductTable from './CreateProductTable';
import {
  warningMsgBar,
  infoMsgBar
} from '../../../../redux/Notification/notification.actions';

class ProductCreatePage extends Component {
  state = {
    name: '',
    skuNumber: '',
    description: '',
    size: '',
    ounce: '',
    department: 'std',
    data: [],
    buttonDisable: true
  };
  componentDidMount() {
    this.props.setUrl(this.props.match.path);
  }

  handelCancel = () => {
    this.setState({
      name: '',
      skuNumber: '',
      description: '',
      size: '',
      ounce: '',
      buttonDisable: false
    });
  };

  onSubmitFrom = e => {
    e.preventDefault();
    this.props.infoMsgBar(`product bine crate`);
    console.log('onSubmitFrom', this.state);
    this.handelCancel();
  };

  buttonChange = () => {
    const { name, skuNumber, size, ounce } = this.state;
    console.log(name);
    if (name.length >= 4) {
      if (skuNumber.length >= 7) {
        if (size.length >= 1) {
          if (ounce.length >= 1) {
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

  handleChange = name => event => {
    this.setState({ [name]: event.target.value }, () => this.buttonChange());
  };

  render() {
    return (
      <PageEl>
        <ContainerHeader
          match={this.props.match}
          title={'Create New Product'}
        />
        <CreateProductForm
          handelCancel={this.handelCancel}
          updateTextField={this.updateTextField}
          {...this.state}
          onSubmitFrom={this.onSubmitFrom}
          handleChange={this.handleChange}
        />
        <CreateProductTable />
      </PageEl>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = { setUrl, warningMsgBar, infoMsgBar };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCreatePage);
