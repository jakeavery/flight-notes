import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
// import logo from './logo.svg'; - how to import graphics
// Import bootstrap components
// Import other components
import MissionInfo from './components/MissionInfo';
import AircraftInfo from './components/AircraftInfo';
import PreflightChecklist from './components/PreflightChecklist';

import './App.css';

class App extends Component {
  render() {
    return (
      <Grid>
        <MissionInfo />
        <AircraftInfo />
        <PreflightChecklist />
      </Grid>
    );
  }
}

export default App;
