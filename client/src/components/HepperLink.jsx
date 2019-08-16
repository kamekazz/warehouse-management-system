import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { styleColor } from '../Styles/styleThem';

export const HepperLink = styled(Link)`
  color: ${styleColor.secondary.main};
  text-decoration: none;
  transition: all 0.5s ease;

  &:hover {
    text-decoration: underline;
    color: ${styleColor.secondary.lite};
  }
`;
