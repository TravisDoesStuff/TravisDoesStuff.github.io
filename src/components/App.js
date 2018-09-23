import React, { Component } from 'react';
import { Route, HashRouter, Link } from 'react-router-dom';

import Bio from './Bio';
import Projects from './Projects';
import Footer from './Footer';

import '../css/app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        { this.renderHeader() }
        { this.renderBody() }
        { this.renderFooter() }
      </div>
    );
  }

  renderHeader() {
    return (
      <header className="App-header">
          <a href='/' className='active'>Bio</a>
          <a href='/projects'>Projects</a>
      </header>
    )
  }

  renderBody() {
    return (
      <Bio />
    )
  }

  renderFooter() {
    return (
      <Footer />
    )
  }
}

export default App;
