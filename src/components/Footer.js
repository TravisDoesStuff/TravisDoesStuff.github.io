import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import '../css/bio.css';
import Links from '../data/Links';

class Footer extends Component {
    constructor() {
        super();
        this.state = { links: [] }
    }

    componentWillMount() {
        this.fetchLinks();
    }

    fetchLinks() {
        // fetch('/api/links')
        // .then(data => data.json())
        // .then((res) => {
        //     this.setState({ links: res.data })
        // });
        this.setState({ links: Links.links });
    }

    render() {
        let date = new Date();
        let currentYear = date.getFullYear();

        let links = this.state.links;
        return (
            <div className='App-footer'>
                <div className='footer-links'>
                    { links.map((link) =>
                        <div className="footer-linkBlock" key={ link._id }><a href={ link.link } target='_blank'><Icon link name={ link.icon } />{ link.name }</a></div>
                    )}
                </div>
                <div>-</div>
                <div className='copyright'>Copyright © 2018 - {currentYear} Travis Burt. All rights reserved.</div>
            </div>
        )
        
    }
}

export default Footer;
