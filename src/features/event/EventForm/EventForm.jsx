import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

class EventForm extends Component {
  
  state = {
    event:{
      title:"",
      date:"",
      city:"",
      venue:"",
      hostedby:""
    }
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.createEvent(this.state.event)

  }

  onInputChange = (e) => {
    const newEvent = this.state.event;
    newEvent[e.target.name] = e.target.value
    this.setState({
      event: newEvent
    })
  }


  render() {
    const {handleFormClose,} = this.props;
    const {event} = this.state;
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input name='title' onChange={this.onInputChange} value={event.title} placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input name='date' onChange={this.onInputChange} value={event.date} type='date' placeholder="Event Date" />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input name='city' onChange={this.onInputChange} value={event.city} placeholder="City event is taking place" />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input name='venue' onChange={this.onInputChange} value={event.venue} placeholder="Enter the Venue of the event" />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input name='hostedby' onChange={this.onInputChange} value={event.hostedby} placeholder="Enter the name of person hosting" />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={handleFormClose} type="button">Cancel</Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
