import React, { Component } from 'react';

// Import bootstrap components, ex:
import {
  Row,
}
  from 'react-bootstrap';
// Import other componenst, ex:
// import FlightSection from './components/FlightSection'

import '../App.css';

class Flight extends Component {
  render() {
    return (
      // Build component here
      <div>
        <Row className="show-grid">
          <h1>Flight</h1>
        </Row>
      </div>
    );
  }
}

export default Flight;
