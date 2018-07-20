import React, { Component } from 'react';

// Import bootstrap components, ex:
import {
  Row, Col, FormControl, ControlLabel, FieldGroup,
}
  from 'react-bootstrap';
// Import other componenst, ex:
// import FlightSection from './components/FlightSection'

import '../App.css';

class AircraftInfo extends Component {
  render() {
    return (
      // Build component here
      <div>
        <Row className="show-grid">
          <h1>Aircraft Info</h1>
        </Row>
        <Row className="show-grid">
          <Col xs={6} sm={3}>
            <ControlLabel>Aircraft Number</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">select</option>
              <option value="other">...</option>
            </FormControl>
          </Col>
          <Col xs={6} sm={3}>
            <ControlLabel>Payload</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">select</option>
              <option value="other">...</option>
            </FormControl>
          </Col>
          <Col xs={6} sm={3}>
            <ControlLabel>Battery</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">select</option>
              <option value="other">...</option>
            </FormControl>
          </Col>
          {/* <Col xs={6} sm={3}>
            <FieldGroup
              type="text"
              label="Voltage"
              placeholder="Enter text"
            />
          </Col> */}
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

export default AircraftInfo;
