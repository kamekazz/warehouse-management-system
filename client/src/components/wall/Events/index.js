import React, {Component} from "react";

import EventItem from "./EventItem";

class Events extends Component {

  render() {
    return (
      <div>
        <div className="flex-row mb-3">
          <h4>EVENTS</h4>
          <a className="ml-auto"><u>VIEW ALL</u></a>
        </div>
        {this.props.eventList.map((event) => {
            return <EventItem key={event.id} index={event.id} data={event}/>
          }
        )}
      </div>
    )
  }
}

export default Events
