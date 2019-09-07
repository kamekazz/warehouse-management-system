import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PageEl } from '../../../Styles/Elements/ToolsEl';
import { setUrl } from '../../../redux/Auth/user.actions';
import { acGetPalletsByState } from '../../../redux/reiving/reiving.action';
import ContainerHeader from '../../../components/ContainerHeader';
import Main from './Main';

class PutAway extends Component {
  componentDidMount() {
    this.props.acGetPalletsByState('r/p');
  }
  render() {
    return (
      <PageEl>
        <ContainerHeader match={this.props.match} title={'Put Away'} />
        <Main />
      </PageEl>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  acGetPalletsByState,
  setUrl
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PutAway);
