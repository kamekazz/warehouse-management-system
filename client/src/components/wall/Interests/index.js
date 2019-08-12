import React from "react";
import WidgetHeader from "components/WidgetHeader/index";
import Button from '@material-ui/core/Button';

const Interests = ({interestList}) => {
  return (
    <div className="jr-entry-sec">
      <WidgetHeader title="Interests"/>
      <ul className="list-inline list-inline-3">
        {interestList.map((interest) =>
          <li key={interest.id} className="list-inline-item mr-0 mb-2">
            <Button variant="contained" className="jr-btn jr-btn-lg bg-white">{interest.interest}</Button>
          </li>
        )}
      </ul>
    </div>
  )
};

export default Interests
