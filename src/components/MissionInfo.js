import React, { Component } from 'react';

// Import bootstrap components, ex:
import { Row, Col } from 'react-bootstrap';
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
          <Col xs={2}>10/08/1991</Col>
          <Col xs={2}>Flight 1</Col>
          <Col xs={4}>Location</Col>
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
