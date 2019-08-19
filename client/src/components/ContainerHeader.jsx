import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import styled from 'styled-components';
import { styleColor } from '../Styles/styleThem';

import Paper from '@material-ui/core/Paper';

const getDisplayString = sub => {
  const arr = sub.split('-');
  if (arr.length > 1) {
    return (
      arr[0].charAt(0).toUpperCase() +
      arr[0].slice(1) +
      ' ' +
      arr[1].charAt(0).toUpperCase() +
      arr[1].slice(1)
    );
  } else {
    return sub.charAt(0).toUpperCase() + sub.slice(1);
  }
};
const getUrlString = (path, sub, index) => {
  if (index === 0) {
    return '/';
  } else {
    return '/' + path.split(sub)[0] + sub;
  }
};

const ContainerHeader = ({ title, match }) => {
  const path = match.path.substr(1);
  const subPath = path.split('/');
  return (
    <PaperEl>
      <h1>{title}</h1>

      <BreadcrumbEl>
        {subPath.map((sub, index) => {
          return (
            <BreadcrumbItemEl
              active={subPath.length === index + 1}
              tag={subPath.length === index + 1 ? 'span' : 'a'}
              key={index}
              href={getUrlString(path, sub, index)}
            >
              {getDisplayString(sub)}
            </BreadcrumbItemEl>
          );
        })}
      </BreadcrumbEl>
    </PaperEl>
  );
};

export default ContainerHeader;

const BreadcrumbItemEl = styled(BreadcrumbItem)`
  color: ${styleColor.primary.dark};
  transition: all 0.5 ease-in-out;
  &:hover {
    color: ${styleColor.primary.lite};
  }
`;

const PaperEl = styled(Paper)`
  padding: 8px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin-bottom: 0;
    font-weight: 800;
  }
`;
const BreadcrumbEl = styled(Breadcrumb)`
  ol {
    margin-bottom: 0;
  }
`;
