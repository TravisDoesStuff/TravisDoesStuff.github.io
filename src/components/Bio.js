import React, { Component } from 'react';
import Person from '../data/Person';
import { Link } from 'react-router-dom';
import { Header, Grid, Image, Icon, Button, Divider } from 'semantic-ui-react';
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
                <div className='page-bio'>
                    { this.renderName(person) }
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
                            <div className='person-title title'><Icon name='map marker'/> { person.location }</div>
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
                <div className='about-block about-me'>
                    <Header as='h2'>About me:</Header>
                    { person.description.map((paragraph,p) => 
                        <p key={p}>{ paragraph }</p>
                    )}
                    { this.renderActions() }
                </div>
                <Divider />
                <div className='about-block'>
                    <Skills skills={ person.skills } />
                </div>
                <Divider />
                <div className='about-block'>
                    <Timeline timeline={ person.history } />
                </div>
            </div>
        )
    }

    renderActions() {
        return (
            <div className='actionContainer'>
                <Button basic color='teal' icon labelPosition='right' as={ Link } to={ '/projects' } size='large'>
                    View my Projects
                    <Icon name='angle right' />
                </Button>
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
