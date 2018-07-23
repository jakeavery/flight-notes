import React, { Component } from 'react';

// Import bootstrap components, ex:
import {
  Row, Col, FormControl, Checkbox, Button, Glyphicon,
}
  from 'react-bootstrap';
// Import other componenst, ex:
// import FlightSection from './components/FlightSection'

import '../../App.css';

class ChecklistItem extends Component {
  render() {
    return (
      // Build component here
      <div>
        <Row className="show-grid">
          <Col xs={6} sm={1}>
            <FormControl.Static>12:50:18</FormControl.Static>
          </Col>
          <Col xs={8} sm={9}>
            <FormControl.Static>Aircraft Power</FormControl.Static>
          </Col>
          <Col xs={2} sm={1}>
            <Checkbox readOnly />
          </Col>
          <Col xs={2} sm={1}>
            <Button>
              <Glyphicon glyph="comment" />
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ChecklistItem;
