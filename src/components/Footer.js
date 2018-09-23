import React, { Component } from 'react';

import { Icon, Container, Divider } from 'semantic-ui-react';
import '../css/bio.css';
import Links from '../data/Links';

class Footer extends Component {
    render() {
        return (
            <Container textAlign="center" className="App-footer">
                <Divider />
                { Links.links.map(link =>
                    <div className="footer-linkBlock"><a href={ link.link } target='_blank'><Icon link name={ link.icon } />{ link.name }</a></div>
                )}
            </Container>
        )
        
    }
}

export default Footer;
