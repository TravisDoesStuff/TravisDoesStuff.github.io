import React, { Component } from 'react';
import Person from '../data/Person';
import { Link } from 'react-router-dom';
import { Header, Grid, Image, Icon, Segment, Container, Responsive, Button } from 'semantic-ui-react';
import '../css/bio.css';

import Skills from './Skills';
import Timeline from './Timeline';

class Bio extends Component {
    constructor() {
        super();
        this.state = { person: [] }
    }

    componentWillMount() {
        this.fetchPerson();
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

    render() {
        const person = this.state.person;
        if(person.length !== 0) {
            return (
                <Container className='page-bio'>
                    { this.renderName(person) }
                    { this.renderAbout(person) }
                    { this.renderSkills(person) }
                    { this.renderQuote(person) }
                    { this.renderTimeline(person) }
                </Container>
            );
        } else {
            return null;
        }
    }

    renderName = (person) => {
        return (
            <Container textAlign='center' className='name-section'>
                <Grid stackable columns={2}>
                    <Grid.Column>
                        <Header as='h1'>
                            <span className='person-name title'>{ person.name }</span>
                            <Header.Subheader><span  className='title'>{ person.title }</span></Header.Subheader>
                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h4'><span className='title'><Icon name='map marker'/>{ person.location }</span></Header>
                    </Grid.Column>
                </Grid>
                <Responsive maxWidth='801' style={{ 'margin-top': '20px' }}>
                    { this.renderImage() }
                </Responsive>
            </Container>
        );
    }

    renderAbout(person) {
        return (
            <Segment inverted className='opaque'>
                <div className='about-section'>
                    { person.description.map((paragraph,p) => 
                        <p key={p}>{ paragraph }</p>
                    )}
                    { this.renderActions() }
                </div>
            </Segment>
        )
    }

    renderActions() {
        return (
            <Grid stackable>
                <Grid.Column width={10}></Grid.Column>
                <Grid.Column width={6}>
                    <Button inverted basic color='orange' icon labelPosition='right' as={ Link } to={ '/projects' }>
                        View my Projects
                        <Icon name='angle right' />
                    </Button>
                    <Button inverted basic color='teal' icon labelPosition='right' as={ Link } to={ '/portfolio' }>
                        or Portfolio!
                        <Icon name='chevron right' />
                    </Button>
                </Grid.Column>
            </Grid>
        )
    }

    renderSkills(person) {
        return (
            <Grid relaxed stackable columns={2} className='skill-section' style={{marginTop: '20px'}}>
                <Grid.Column width={10}>
                    <Skills skills={ person.skills } />
                </Grid.Column>
                <Grid.Column width={6}>
                    <Responsive minWidth='800'>{ this.renderImage() }</Responsive>
                </Grid.Column>
            </Grid>
        )
    }

    renderImage() {
        let personImage = this.state.person.image;
        if(personImage.length !== 0) {
            return (
                <Image className='profile-image' src={ personImage } size='medium' circular centered />
            )
        } else {
            return null;
        }
    }

    renderQuote(person) {
        return (
            <div className='quote-section' >
                { person.quote }
            </div>
        )
    }

    renderTimeline(person) {
        return (
            <Segment inverted className='opaque'>
                <Timeline timeline={ person.history } />
            </Segment>
        )
    }
}

export default Bio;
