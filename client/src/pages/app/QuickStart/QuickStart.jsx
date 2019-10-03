import React from 'react';
import styled from 'styled-components';
import { PageEl } from '../../../Styles/Elements/ToolsEl';

import QuickCard from './QuickCard';

const detractionOption = [
  { icon: 'fas fa-truck', title: 'BOS', url: 'BOS' },
  { icon: 'fas fa-sync', title: 'Replenishment', url: 'BOS' },
  { icon: 'fas fa-file-signature', title: 'Cycle Count', url: 'BOS' },
  { icon: 'fas fa-people-carry', title: 'Picking', url: 'BOS' },
  { icon: 'fas fa-box-open', title: 'Receiving', url: '/app/receiving' },
  {
    icon: 'fas fa-thumbtack',
    title: 'Put-away',
    url: '/app/receiving/put-away'
  },
  { icon: 'fas fa-box', title: 'Packaging', url: 'Packaging' },
  { icon: 'fas fa-coins', title: 'Q/A', url: 'Q/A' }
];

function QuickStart() {
  return (
    <PageElEl>
      <ContainerEl>
        {detractionOption.map(data => (
          <QuickCard key={data.title} data={data} />
        ))}
      </ContainerEl>
    </PageElEl>
  );
}

export default QuickStart;

const PageElEl = styled(PageEl)`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const ContainerEl = styled.div`
  margin: 0 auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 150px);
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 150px);
    grid-gap: 12px;
  }
`;
