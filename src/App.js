import React, { Component } from 'react';
import logo from './logo.svg';
// Import bootstrap components
import { Grid } from 'react-bootstrap';
// Import other components
import MissionInfo from './components/MissionInfo';

import './App.css';

class App extends Component {
  render() {
    return (
      <Grid>
        <MissionInfo />
      </Grid>
    );
  }
};

export default App;
