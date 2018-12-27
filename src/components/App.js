import React, { Component } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';

import Header from './Header';
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
      <Header />
    )
  }

  renderBody() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Bio} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </HashRouter>
    )
  }

  renderFooter() {
    return (
      <Footer />
    )
  }
}

export default App;
