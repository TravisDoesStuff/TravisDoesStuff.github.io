import React, { Component } from 'react';
import Person from '../data/Person';
import { Header, List, Grid, Image, Icon, Segment, Container, Responsive } from 'semantic-ui-react';
import '../css/bio.css';

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
        let person = this.state.person;
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

    renderName(person) {
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
                { person.description.map((paragraph,p) => 
                    <p className='about-section' key={p}>{ paragraph }</p>
                )}
            </Segment>
        )
    }

    renderSkills(person) {
        return (
            <Grid relaxed stackable columns={2}>
                <Grid.Column>
                    <Segment inverted className='skill-section opaque'>
                        <Header as='h2' inverted>Skills</Header>
                        <Container className='segment-content'>
                            <Grid columns={3}>
                            { person.skills.map((skill,s) => 
                                <Grid.Column key={s}>
                                    <Header as="h4" inverted>{ skill.category }</Header>
                                    <List bulleted>
                                        { skill.skills.map((skl,i) =>
                                            <List.Item key={i}>{ skl }</List.Item>
                                        )}
                                    </List>
                                </Grid.Column>
                            )}
                            </Grid>
                        </Container>
                    </Segment>
                </Grid.Column>
                <Grid.Column><Responsive minWidth='800'>{ this.renderImage() }</Responsive></Grid.Column>
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
