import React, { Component } from 'react';

import { Icon, Segment } from 'semantic-ui-react';
import '../css/bio.css';
import Links from '../data/Links';

class Footer extends Component {
    render() {
        return (
            <Segment inverted textAlign='center' className='App-footer'>
                { Links.links.map((link,l) =>
                    <div className="footer-linkBlock" key={l}><a href={ link.link } target='_blank'><Icon link name={ link.icon } />{ link.name }</a></div>
                )}
            </Segment>
        )
        
    }
}

export default Footer;
