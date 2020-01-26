import React, { Component } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';

import Header from './Header';
import Bio from './Bio';
import Projects from './Projects';
import Footer from './Footer';

import '../css/app.css';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.handler = this.changeActivePage.bind(this);
  }

  changeActivePage = (page) => {
    this.setState({
      activeItem: page
    });
  }

  componentWillMount = () => {
    this.setState({activeItem: this.getActiveItem()}) // set button on page load
  }

  getActiveItem = () => {
    let urls = window.location.href.split("/");
    let currentPage = urls[urls.length - 1];
    return currentPage ? currentPage : 'bio';
  }

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
      <Header changeActivePage={this.changeActivePage} activeItem={this.state.activeItem} />
    )
  }

  renderBody() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={ (props) => <Bio {...props} changeActivePage={this.changeActivePage} /> } />
          <Route exact path="/projects" component={ (props) => <Projects {...props} changeActivePage={this.changeActivePage} /> }/>
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
