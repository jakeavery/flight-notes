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
          <Col xs={6} sm={2}>
            <ControlLabel>Date</ControlLabel>
            <FormControl.Static>7/18/2018</FormControl.Static>
          </Col>
          <Col xs={6} sm={2}>
            <ControlLabel>Flight #</ControlLabel>
            <FormControl.Static>Flight 1</FormControl.Static>
          </Col>
          <Col xs={12} sm={4}>
            <ControlLabel>Location</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">select</option>
              <option value="other">...</option>
            </FormControl>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={6} sm={4}>
            <ControlLabel>Pilot-in-Command</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">select</option>
              <option value="other">...</option>
            </FormControl>
          </Col>
          <Col xs={6} sm={4}>
            <ControlLabel>Payload Operator</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">select</option>
              <option value="other">...</option>
            </FormControl>
          </Col>
          <Col xs={6} sm={4}>
            <ControlLabel>Visual Observer</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">select</option>
              <option value="other">...</option>
            </FormControl>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={12}>
            <ControlLabel>Mission Description</ControlLabel>
            <FormControl componentClass="textarea" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default MissionInfo;
