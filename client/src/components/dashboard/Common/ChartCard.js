import React from 'react';

const ChartCard = ({styleName, children, chartHeaderStyle}) => {
  return (
    <div className={`card border-0 shadow ${styleName}`}>
      <div className={`chart-header ${chartHeaderStyle}`}>
        {children[0]}
      </div>
      {children[1]}
    </div>
  )
};

export default ChartCard;

