import React, { Component } from 'react';
import Person from '../data/Person';
import Links from '../data/Links';
import { Link } from 'react-router-dom';
import { Header, Grid, Image, Icon, Button, Divider, Responsive, Container } from 'semantic-ui-react';
import '../css/bio.css';

import Skills from './Skills';
import Timeline from './Timeline';

class Bio extends Component {
    constructor() {
        super();
        this.state = { person: [], links: [] }
    }

    componentWillMount() {
        this.fetchPerson();
        this.fetchLinks();
    }

    fetchPerson() {
        // fetch('/api/person')
        // .then(data => data.json())
        // .then((res) => {
        //     let personDetails = Object.values(res.data)[0];
        //     this.setState({ person: personDetails });
        // });
        this.setState({ person: Person });
    }

    fetchLinks() {
        this.setState({ links: Links });
    }

    render() {
        const person = this.state.person;
        const links = this.state.links.links;
        if(person.length !== 0 && links.length !== 0) {
            return (
                <div className='page-bio'>
                    { this.renderName(person) }
                    { this.renderActions(links) }
                    { this.renderAbout(person) }
                </div>
            );
        } else {
            return null;
        }
    }

    renderName = (person) => {
        return (
            <div className='name-section'>
                <Grid stackable columns={2}>
                    <Grid.Column>
                        <div className='name-block'>
                            <div className='person-name title'>{ person.name }</div>
                            <div className='person-title title'>{ person.title }</div>
                            <div className='person-location title'><Icon name='map marker'/> { person.location }</div>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        { this.renderImage() }
                    </Grid.Column>
                </Grid>
            </div>
        );
    }

    renderAbout(person) {
        return (
            <div className='about-section'>
                <Divider />
                <Container className='about-me'>
                    <Header as='h2'>About me</Header>
                    <div className='aboutParagraph'>
                        { person.description.map((paragraph,p) => 
                            <p key={p}>{ paragraph }</p>
                        )}
                    </div>
                </Container>
                <Divider />
                <Container>
                    <Skills skills={ person.skills } />
                </Container>
                <Divider />
                <Container>
                    <Timeline timeline={ person.history } />
                </Container>
            </div>
        )
    }

    renderActions(links) {
        return (
            <div className='about-section action-section'>
                <Container>
                    <Responsive maxWidth={Responsive.onlyComputer.minWidth} className='action-row about-section' >
                        <Grid columns={2}>
                            <Grid.Row>
                                <Grid.Column>
                                    { links.map((link) =>
                                        <Button circular icon key={ link._id } href={ link.link } target='_blank' size='large' color={ link.color }>
                                            <Icon link name={ link.icon } />
                                        </Button>
                                    )}
                                </Grid.Column>
                                <Grid.Column>
                                    <Button color='blue' icon labelPosition='right' as={ Link } to={ '/projects' } size='large' fluid style={{ fontWeight: 'bold' }}>
                                        Projects
                                        <Icon name='angle right' />
                                    </Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Responsive>
                    <Responsive minWidth={Responsive.onlyComputer.minWidth} className='action-row' >
                        <Grid columns={2}>
                            <Grid.Row>
                                <Grid.Column>
                                    { links.map((link) =>
                                        <Button circular icon key={ link._id } href={ link.link } target='_blank' size='large' style={{ fontWeight: 'bold' }} color={ link.color }>
                                            <Icon link name={ link.icon } /> { link.name }
                                        </Button>
                                    )}
                                </Grid.Column>
                                <Grid.Column>
                                    <Button color='blue' icon labelPosition='right' as={ Link } to={ '/projects' } size='large' fluid style={{ fontWeight: 'bold' }}>
                                        View my Projects <Icon name='angle right' />
                                    </Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Responsive>
                </Container>
            </div>
        )
    }

    renderImage() {
        let personImage = this.state.person.image;
        if(personImage.length !== 0) {
            return (
                <Image className='profile-image' src={ personImage } circular centered />
            )
        } else {
            return null;
        }
    }
}

export default Bio;
