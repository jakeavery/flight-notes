import React, { Component } from 'react';

// Import bootstrap components, ex:
import {
  Row,
}
  from 'react-bootstrap';
// Import other componenst, ex:
// import FlightSection from './components/FlightSection'

import '../App.css';
import ChecklistItem from './sub-components/ChecklistItem';

class PreflightChecklist extends Component {
  render() {
    return (
      // Build component here
      <div>
        <Row className="show-grid">
          <h1>Preflight Checklist</h1>
        </Row>
        <ChecklistItem />
      </div>
    );
  }
}

export default PreflightChecklist;
