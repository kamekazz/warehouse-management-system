import React from 'react';

const CardHeader = ({title, updatedAt, rightItemStyle}) => (
  <div className="card-header clearfix">
            <span className="title float-left">
                {title}
            </span>
    <span className={`float-right  ${rightItemStyle}`}>
                {updatedAt}
        </span>
  </div>
);
export default CardHeader;
