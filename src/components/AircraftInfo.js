import React, { Component } from 'react';

// Import bootstrap components, ex:
import {
  Row, Col, FormControl, ControlLabel, FormGroup, Checkbox,
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
          <Col xs={6} sm={3}>
            <FormGroup>
              <ControlLabel>Voltage</ControlLabel>
              <FormControl
                type="text"
                // value={this.state.value}
                placeholder="Enter text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <FormGroup>
              <ControlLabel>Configuration Changes</ControlLabel>
              <Checkbox readOnly>
                New wpt or vrs file?
              </Checkbox>
            </FormGroup>
          </Col>
          <Col xs={12}>
            <FormGroup>
              <FormControl componentClass="textarea" placeholder="Other configuration changes" />
            </FormGroup>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AircraftInfo;
