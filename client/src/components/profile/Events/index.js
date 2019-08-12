import React from "react";

import Widget from "components/Widget/index";
import EventItem from "./EventItem";
import {eventList} from "../../../app/routes/socialApps/routes/Profile/data"

const Events = () => {
  return (
    <Widget styleName="jr-card-profile">
      <div className="mb-3 mb-md-2">
        <h3 className="card-title mb-2 mb-md-3">Events</h3>
        <p className="text-grey jr-fs-sm mb-0">What Kiley is up-to</p>
      </div>
      <div className="pt-md-3">
        {eventList.map((data, index) =>
          <EventItem key={index} data={data}/>
        )}
      </div>
    </Widget>
  );
}

export default Events;
