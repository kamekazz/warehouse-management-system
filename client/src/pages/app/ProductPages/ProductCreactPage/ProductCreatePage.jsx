import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUrl } from '../../../../redux/Auth/user.actions';
import ContainerHeader from '../../../../components/ContainerHeader';
import { PageEl } from '../../../../Styles/Elements/ToolsEl';
import CreateProductForm from './CreateProductForm';
import CreateProductTable from './CreateProductTable';

export class ProductCreatePage extends Component {
  componentDidMount() {
    this.props.setUrl(this.props.match.path);
  }
  render() {
    return (
      <PageEl>
        <ContainerHeader
          match={this.props.match}
          title={'Create New Product'}
        />
        <CreateProductForm />
        <CreateProductTable />
      </PageEl>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = { setUrl };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCreatePage);
