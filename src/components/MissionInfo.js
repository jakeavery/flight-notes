import React, { Component } from 'react';

// Import bootstrap components, ex:
import {
  Row, Col, FormControl, ControlLabel,
}
  from 'react-bootstrap';
// Import other componenst, ex:
// import FlightSection from './components/FlightSection'

import '../App.css';

class MissionInfo extends Component {
  render() {
    return (
      // Build component here
      <div>
        <Row className="show-grid">
          <h1>Mission Info</h1>
        </Row>
        <Row className="show-grid">
          <Col xs={2}>
            <ControlLabel>Date</ControlLabel>
            <FormControl.Static>7/18/2018</FormControl.Static>
          </Col>
          <Col xs={2}>
            <ControlLabel>Flight #</ControlLabel>
            <FormControl.Static>Flight 1</FormControl.Static>
          </Col>
          <Col xs={4}>
            <ControlLabel>Location</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">select</option>
              <option value="other">...</option>
            </FormControl>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={4}>Pilot-in-Command</Col>
          <Col xs={4}>Payload Operator</Col>
          <Col xs={4}>Visual Observer</Col>
        </Row>
        <Row className="show-grid">
          <Col xs={12}>Mission Description</Col>
        </Row>
      </div>
    );
  }
}

export default MissionInfo;
