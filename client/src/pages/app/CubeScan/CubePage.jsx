import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { PageEl } from '../../../Styles/Elements/ToolsEl';
import ContainerHeader from '../../../components/ContainerHeader';
import FormUpcContainer from './Form';

class CubePage extends Component {
  render() {
    return (
      <PageElEl>
        <ContainerHeader match={this.props.match} title={'CubeScan'} />
        <MainContent>
          <FormUpcContainer />
        </MainContent>
      </PageElEl>
    );
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CubePage);

const PageElEl = styled(PageEl)`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(1, 1fr);
  grid-template-areas:
    'ContainerHeader'
    'MainContent';
  @media (max-width: 600px) {
    grid-gap: 12px;
  }
`;

const MainContent = styled.main`
  grid-area: MainContent;
  display: grid;
  width: 100%;
`;
