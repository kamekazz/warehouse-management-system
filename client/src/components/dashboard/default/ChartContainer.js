import React from 'react';

const ChartContainer = ({styleName, children}) => {
  return (
    <div className={`card shadow ${styleName}`}>
      <div className="chart-header border-bottom-1">
                <span className="title float-left">
                    {children[0]}
                </span>
        <span className="float-right">
                        {children[1]}
                 </span>
      </div>
      {children[2]}
      <div className="px-4">
                <span className="float-left">
                    {children[3]}
                </span>
        <span className="float-right">
                    {children[4]}
                </span>
      </div>
    </div>
  )
};

export default ChartContainer;

