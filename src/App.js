import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BootstrapCarousel from './components/BootstrapCarousel.js';
import CarouselNavBar from './components/CarouselNavbar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CarouselNavBar />
        <Router>
          <Route exact path="/" component={BootstrapCarousel} />
        </Router>

      </div>
    );
  }
}

export default App;
