import React from 'react';

const ActivityBox = ({visit, newVisit, lastWeekVisit, styleName}) => {
  return (

    <div
      className={`list-group-item d-flex justify-content-between text-center border-left-0 border-right-0 ${styleName}`}>
      <div className="my-2">
        <div className="mb-1 text-muted">
          Page / Visit
        </div>
        <div className="text-grey text-darken-3">
          {visit}
        </div>
      </div>
      <div className="my-2">
        <div className="mb-1 text-muted">
          % New Visit
        </div>
        <div className="text-grey text-darken-3">
          {newVisit}
        </div>
      </div>
      <div className="my-2">
        <div className="mb-1 text-muted">
          Last Week Visit
        </div>
        <div className="text-grey text-darken-3">
          {lastWeekVisit}
        </div>
      </div>
    </div>

  )
};

export default ActivityBox;

