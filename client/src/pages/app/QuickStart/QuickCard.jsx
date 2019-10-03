import React from 'react';
import styled from 'styled-components';
import { PaperEl } from '../../../Styles/Elements/ToolsEl';
import history from '../../../redux/history';

function QuickCard({ data }) {
  const { icon, title, url } = data;

  return (
    <CardEl onClick={() => history.push(url)}>
      <ContainerEl>
        <i className={icon} style={{ fontSize: '70px' }}></i>
        <h5>{title}</h5>
      </ContainerEl>
    </CardEl>
  );
}

export default QuickCard;
const CardEl = styled(PaperEl)`
  width: 150px;
  height: 160px;
  padding: 12px;
  cursor: pointer;
  transition: all ease 0.2s;
  &:hover {
    color: rgb(57, 250, 224);
    box-shadow: 0 3px 6px rgba(57, 250, 224, 0.16),
      0 3px 6px rgba(57, 250, 224, 0.23);
  }
  &:onclick {
    color: rgb(57, 250, 224);
    box-shadow: 0 3px 6px rgba(57, 250, 224, 0.16),
      0 3px 6px rgba(57, 250, 224, 0.23);
  }
`;
const ContainerEl = styled.div`
  width: 100%;
  height: 100%;
  padding: 2px 16px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  h5 {
    text-overflow: ellipsis;
    margin-bottom: 0;
  }
`;
