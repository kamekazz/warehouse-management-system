import React from 'react';

const CardLayout = ({children, styleName, childrenStyle}) => {
  return (
    <div className={`jr-card`}>
      {children}
    </div>
  )
};

export default CardLayout;

