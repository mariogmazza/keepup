import React, { Component } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    const { events, onEventOpen, deleteEvents } = this.props;
    return (
      <div>
        <h1>Event list</h1>
        {events.map(event => (
          <EventListItem
            key={event.id}
            event={event}
            onEventOpen={onEventOpen}
            deleteEvents={deleteEvents}
          />
        ))}
      </div>
    );
  }
}

export default EventList;
