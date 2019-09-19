import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PageEl, PaperEl } from '../../../Styles/Elements/ToolsEl';
import { setUrl } from '../../../redux/Auth/user.actions';
import {
  acGetPalletsByState,
  acChartData
} from '../../../redux/reiving/reiving.action';
import ContainerHeader from '../../../components/ContainerHeader';
import Main from './Main';
import PalletChart from '../Receiving/PalletChart';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import styled from 'styled-components';

const PutAway = ({ setUrl, acGetPalletsByState, match, acChartData }) => {
  useEffect(() => {
    setUrl(match.path);
    acGetPalletsByState('r/p');
    acChartData();
  }, []);
  const matches = useMediaQuery('(min-width:800px)');
  return (
    <PageElEl>
      {!matches ? (
        <>
          <ContainerHeader match={match} title={'Put Away'} />
          <Main />
          <PalletChart />
        </>
      ) : (
        <PaperEl>
          <h1>please use smaller screen</h1>
        </PaperEl>
      )}
    </PageElEl>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  acGetPalletsByState,
  setUrl,
  acChartData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PutAway);

const PageElEl = styled(PageEl)`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, auto);
  grid-template-areas:
    'ContainerHeader ContainerHeader'
    'Main Main'
    'PalletChart PalletChart';
  @media (max-width: 600px) {
    grid-gap: 12px;
  }
`;
