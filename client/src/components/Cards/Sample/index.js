import React from 'react';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';

const SimpleCard = ({headerStyle}) => {

  return (
    <div className="jr-card text-center pb-4">
      <div className={`jr-card-header-color text-white ${headerStyle}`}>
        <div className="pt-3">
          <p className="mb-3 jr-fs-13">Word of the Day</p>
          <h3 className="card-title jr-font-weight-bold mb-2">be-nev-o-lent</h3>
          <span className="jr-fs-13">adjective</span>
          <Fab className="jr-badge-up bg-success"><i className="zmdi zmdi-volume-up"/></Fab>
        </div>
      </div>
      <div className="jr-card-body pt-1">
        <p className="card-text">
          Well meaning and kindly "he was something of a benevolent despot"
        </p>
        <Button size="small" color="primary">Learn More</Button>
      </div>
    </div>
  );
}

export default SimpleCard;