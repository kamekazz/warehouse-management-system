import React from 'react';

const AppRow = ({styleName, children}) => {
  return (
    <div className="row">
      <div className={`${styleName}`}>
        {children}
      </div>
    </div>
  )
};

export default AppRow;

