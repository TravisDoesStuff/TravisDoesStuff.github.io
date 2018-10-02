import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import { Menu, Segment, Grid, Dropdown, Responsive } from 'semantic-ui-react';

const menuItems = [
    { key:'', name:'bio', link:'/' },
    { key:'', name:'projects', link:'/projects' },
    { key:'', name:'contact', link:'/contact' }
]

class Header extends Component {
    state = { activeItem: 'bio' };

    render = () => {
        let activeItem = this.state.activeItem;

        return (
            <Segment inverted>
                <Grid columns={2}>
                    <Grid.Column className='header-title'>
                        Does Stuff
                    </Grid.Column>
                    <Grid.Column>
                        <Responsive minWidth='799'>
                            <Menu pointing secondary inverted>
                                <Menu.Menu position='right'>
                                    { menuItems.map((menuItem,m) =>
                                        <HashRouter key={m}>
                                            <Menu.Item
                                                active={ activeItem===menuItem.name }
                                                name={ menuItem.name }
                                                onClick={ this.handleMenuClick }
                                                as={Link}
                                                to={ menuItem.link } />
                                        </HashRouter>
                                    )}
                                </Menu.Menu>
                            </Menu>
                        </Responsive>
                        
                        <Responsive maxWidth='800' style={{float: 'right'}}>
                            <Dropdown item icon='bars' position='right'>
                                <Dropdown.Menu style={{ left:'auto', right:0 }}>
                                    { menuItems.map((menuItem,m) =>
                                        <HashRouter key={m}>
                                            <Dropdown.Item active={ activeItem===menuItem.name } name={ menuItem.name } onClick={ this.handleMenuClick } as={Link} to={ menuItem.link }>{ menuItem.name }</Dropdown.Item>
                                        </HashRouter>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Responsive>
                    </Grid.Column>
                </Grid>
            </Segment>
        )
    }

    handleMenuClick = (e, {name}) => {
        this.setState({ activeItem: name });
    }
}

export default Header;
