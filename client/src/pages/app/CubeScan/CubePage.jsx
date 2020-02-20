import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { PageEl } from '../../../Styles/Elements/ToolsEl';
import ContainerHeader from '../../../components/ContainerHeader';
import FormUpcContainer from './Form';
import DataTable from './DataTable';

class CubePage extends Component {
  render() {
    return (
      <PageElEl>
        <ContainerHeader match={this.props.match} title={'CubeScan'} />
        <MainContent>
          <FormUpcContainer />
          <DataTable />
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
  grid-gap: 12px;
  grid-template-columns: repeat(1, 1fr);
  grid-template-areas:
    'ContainerHeader'
    'MainContent';
  @media (max-width: 600px) {
    grid-gap: 12px;
  }
`;

const MainContent = styled.main`
  width: 100%;
  grid-area: MainContent;
  display: grid;
  grid-gap: 12px;
  grid-template-columns: 1fr 2fr;
  grid-template-areas:
    'FormUpcContainer DataTable'
    'FormUpcContainer DataTable';
`;
