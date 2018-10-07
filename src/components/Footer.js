import React, { Component } from 'react';
import { Icon, Segment } from 'semantic-ui-react';
import '../css/bio.css';

class Footer extends Component {
    constructor() {
        super();
        this.state = { links: [] }
    }

    componentWillMount() {
        this.fetchLinks();
    }

    fetchLinks() {
        fetch('/api/links')
        .then(data => data.json())
        .then((res) => {
            this.setState({ links: res.data })
        });
    }

    render() {
        let links = this.state.links;
        return (
            <Segment inverted textAlign='center' className='App-footer'>
                { links.map((link) =>
                    <div className="footer-linkBlock" key={ link._id }><a href={ link.link } target='_blank'><Icon link name={ link.icon } />{ link.name }</a></div>
                )}
            </Segment>
        )
        
    }
}

export default Footer;
