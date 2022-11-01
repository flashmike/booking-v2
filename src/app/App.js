//created by Mike Flash | flashmike.com
import React, { Component } from 'react';
import Booking from './components/Booking';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div >
        <Navbar />
        <Booking />
      </div>
    );
  }
}

export default App;
