import React, { Component } from 'react';
import Person from '../data/Person';
import { Header, List, Grid, Image, Icon, Segment, Container, Responsive } from 'semantic-ui-react';
import '../css/bio.css';

import Timeline from './Timeline';

class Bio extends Component {

    render() {
        return (
            <Container className='page-bio'>
                { this.renderName() }
                { this.renderAbout() }
                { this.renderSkills() }
                { this.renderQuote() }
                { this.renderTimeline() }
            </Container>
        );
    }

    renderName() {
        return (
            <Container textAlign='center' className='name-section'>
                <Grid stackable columns={2}>
                    <Grid.Column>
                        <Header as='h1' className='name-name' color='grey inverted'>
                            <span className='person-name'>{ Person.name }</span>
                            <Header.Subheader>{ Person.title }</Header.Subheader>
                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h4' className='name-location' color='grey inverted'><Icon name='map marker'/>{ Person.location }</Header>
                    </Grid.Column>
                </Grid>
                <Responsive maxWidth='801' style={{ 'margin-top': '20px' }}>
                    { this.renderImage() }
                </Responsive>
            </Container>
        );
    }

    renderAbout() {
        return (
            <Segment inverted>
                { Person.description.map( paragraph => 
                    <p className='about-section'>{ paragraph }</p>
                )}
            </Segment>
        )
    }

    renderSkills() {
        return (
            <Grid relaxed stackable columns={2}>
                <Grid.Column>
                    <Segment inverted className='skill-section'>
                        <Header as='h2' inverted>Skills</Header>
                        <Grid columns={3}>
                        { Person.skills.map(skill => 
                            <Grid.Column>
                                <Header as="h4" inverted>{ skill.category }</Header>
                                <List bulleted>
                                    { skill.skills.map( s =>
                                        <List.Item>{ s }</List.Item>
                                    )}
                                </List>
                            </Grid.Column>
                        )}
                        </Grid>
                    </Segment>
                </Grid.Column>
                <Grid.Column><Responsive minWidth='800'>{ this.renderImage() }</Responsive></Grid.Column>
            </Grid>
        )
    }

    renderImage() {
        return (
            <Image className='profile-image' src='https://avatars0.githubusercontent.com/u/30422493' size='medium' circular centered />
        )
    }

    renderQuote() {
        return (
            <div className='quote-section' >
                { Person.quote }
            </div>
        )
    }

    renderTimeline() {
        return (
            <Segment inverted>
                <Timeline />
            </Segment>
        )
    }
}

export default Bio;
