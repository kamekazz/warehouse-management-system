import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUrl } from '../../../../redux/Auth/user.actions';
import ContainerHeader from '../../../../components/ContainerHeader';
import { PageEl } from '../../../../Styles/Elements/ToolsEl';
import {
  createItem,
  searchLatsItemCreate,
  updateItem,
  deleteItem
} from '../../../../redux/Item/item.action';
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
    buttonDisable: true,
    editMode: false
  };
  componentDidMount() {
    this.props.setUrl(this.props.match.path);
    this.props.searchLatsItemCreate();
  }

  startEditMode = body => {
    this.setState(
      { editMode: true, buttonDisable: false },
      this.enterEditToFiled(body)
    );
  };

  setOnDelete = () => {
    this.props.deleteItem(this.state.skuNumber);
    this.handelCancel();
  };

  enterEditToFiled = body => {
    this.setState({
      name: body[0],
      skuNumber: body[1],
      size: body[4],
      ounce: body[3],
      department: body[2]
    });
  };

  handelCancel = () => {
    this.setState({
      name: '',
      skuNumber: '',
      description: '',
      size: '',
      ounce: '',
      buttonDisable: true,
      editMode: false
    });
  };

  onSubmitFrom = e => {
    e.preventDefault();
    this.props.infoMsgBar(`product bine crate`);
    this.props.createItem(this.state);
    this.handelCancel();
  };

  onSaveForm = e => {
    this.props.infoMsgBar(`product bine saved`);
    this.props.updateItem(this.state);
    this.handelCancel();
  };

  buttonChange = () => {
    const { name, skuNumber, size, ounce } = this.state;
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
          onSaveForm={this.onSaveForm}
          setOnDelete={this.setOnDelete}
        />
        <CreateProductTable
          data={this.props.tableData}
          startEditMode={this.startEditMode}
        />
      </PageEl>
    );
  }
}

const mapStateToProps = state => ({
  tableData: state.itemReducer.itemArray
});

const mapDispatchToProps = {
  setUrl,
  warningMsgBar,
  infoMsgBar,
  createItem,
  searchLatsItemCreate,
  updateItem,
  deleteItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCreatePage);
