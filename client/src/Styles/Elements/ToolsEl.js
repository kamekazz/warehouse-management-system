import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
// import { styleColor } from '../Styles/styleThem';

export const PageEl = styled.div`
  padding: 12px;
  max-width: 1440px;
  margin: 0px auto;
  background: #2b2b2b;
  @media (max-width: 600px) {
    padding: 3px;
  }
`;

export const PaperEl = styled(Paper)`
  padding: 8px 18px;
`;
