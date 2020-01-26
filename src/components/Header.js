import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import { Menu, Grid, Dropdown, Responsive } from 'semantic-ui-react';

const menuItems = [
    { key:'', name:'bio', link:'/' },
    { key:'', name:'projects', link:'/projects' }
]

class Header extends Component {

    render = () => {
        let activeItem = this.props.activeItem;

        return (
            <div className='App-header'>
                <Grid columns={2}>
                    <Grid.Column className='header-title'>
                        <a href='/' className='button-home'>TravisB.io</a>
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
            </div>
        )
    }

    handleMenuClick = (e, {name}) => {
        this.props.changeActivePage(name);
    }
}

export default Header;
