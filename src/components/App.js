import React, { Component } from 'react';
import { Route, HashRouter, Link } from 'react-router-dom';
import { Menu, Segment, Divider, Grid } from 'semantic-ui-react';

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
      <Segment inverted>
        <Grid columns={2}>
          <Grid.Column className='header-title'>
            Does Stuff
          </Grid.Column>
          <Grid.Column>
            <Menu pointing secondary inverted>
              <Menu.Menu position='right'>
                <Menu.Item active name='bio' />
                <Menu.Item name='skills' />
                <Menu.Item name='timeline' />
                <div className='divider' />
                <Menu.Item name='projects' />
                <div className='divider' />
                <Menu.Item name='contact' />
              </Menu.Menu>
            </Menu>
          </Grid.Column>
        </Grid>
        
      </Segment>
      
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
