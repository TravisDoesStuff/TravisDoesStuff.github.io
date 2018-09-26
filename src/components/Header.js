import React, { Component } from 'react';
import { Route, HashRouter, Link } from 'react-router-dom';
import { Menu, Segment, Grid, Dropdown, Responsive } from 'semantic-ui-react';

const menuItems = {};

class Header extends Component {
    state = { activeItem: 'bio' };

    render = () => {
        let activeItem = this.state.activeItem;

        return (
            <Segment inverted>
                <Grid columns={2}>
                    <Grid.Column className='header-title'>
                        Doing Things
                    </Grid.Column>
                    <Grid.Column>
                        <Responsive minWidth='799'>
                            <Menu pointing secondary inverted>
                                <Menu.Menu position='right'>
                                    <Menu.Item active={ activeItem } name={ activeItem } onClick={ this.handleMenuClick() } />
                                    <Menu.Item name='skills' />
                                    <Menu.Item name='timeline' />
                                    <div className='divider' />
                                    <Menu.Item name='projects' />
                                    <div className='divider' />
                                    <Menu.Item name='contact' />
                                </Menu.Menu>
                            </Menu>
                        </Responsive>
                        
                        <Responsive maxWidth='800'>
                            <Dropdown item icon='bars' position='right'>
                                <Dropdown.Menu style={{ left:'auto', right:0 }}>
                                    <Dropdown.Item>Bio</Dropdown.Item>
                                    <Dropdown.Item>Skills</Dropdown.Item>
                                    <Dropdown.Item>Timeline</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item>Projects</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item>Contact</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Responsive>
                    </Grid.Column>
                </Grid>
            </Segment>
        )
    }

    handleMenuClick = (e) => {
        
    }
}

export default Header;
