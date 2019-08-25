import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUrl } from '../../../redux/Auth/user.actions';
import ContainerHeader from '../../../components/ContainerHeader';
import { PageEl } from '../../../Styles/Elements/ToolsEl';
import SearchForm from './SearchForm';

export class LocationPage extends Component {
  componentDidMount() {
    this.props.setUrl(this.props.match.path);
  }
  render() {
    return (
      <PageEl>
        <ContainerHeader match={this.props.match} title={'Location'} />
        <SearchForm />
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
)(LocationPage);
