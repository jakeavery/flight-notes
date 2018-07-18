import React, { Component } from 'react';

// Import bootstrap components, ex:
import { Row } from 'react-bootstrap';
// Import other componenst, ex:
// import FlightSection from './components/FlightSection'

import '../App.css';

class MissionInfo extends Component {
  render() {
    return (
    // Build component here
      <Row className="show-grid">
        <h1>
Mission Info
        </h1>
      </Row>
    );
  }
}

export default MissionInfo;
