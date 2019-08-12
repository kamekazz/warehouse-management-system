import React from 'react';

const Statbox = (props) => {
  return (
    <div className="card shadow">
      <div className="box box-default">
        <div className="box-top">
          {props.children[0]}
        </div>
        <div className="box-info">
          <span> {props.types}</span>
        </div>
        <div className="box-bottom">
          {props.children[1]}
        </div>
      </div>
    </div>
  )
};

export default Statbox;

