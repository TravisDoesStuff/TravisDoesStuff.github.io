import React, { Component } from 'react';
import Person from '../data/Person';
import { Header, List, Grid, Image, Icon, Segment, Container } from 'semantic-ui-react';
import '../css/bio.css';

class Bio extends Component {

    render() {
        return (
            <div className='page-bio'>
                { this.renderName() }
                { this.renderAbout() }
                { this.renderSkills() }
                { this.renderTimeline() }
            </div>
        );
    }

    renderName() {
        return (
            <Container textAlign='center'>
                <Grid stackable columns={2}>
                    <Grid.Column>
                        <Header as='h1' className='name-name' color='grey inverted'>
                            <span className='person-name'>{ Person.name }</span>
                            <Header.Subheader>{ Person.title }</Header.Subheader>
                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h4' className='name-location' color='grey inverted'><Icon name='map marker'/>Boulder, CO</Header>
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }

    renderAbout() {
        return (
            <Segment inverted>
                { Person.description.map(paragraph => 
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
                                <Header as="h4" inverted>{skill.category}</Header>
                                <List bulleted>
                                    { skill.skills.map(s =>
                                        <List.Item>{ s }</List.Item>
                                    )}
                                </List>
                            </Grid.Column>
                        )}
                        </Grid>
                    </Segment>
                </Grid.Column>
                <Grid.Column>{ this.renderImage() }</Grid.Column>
            </Grid>
        )
    }

    renderImage() {
        return (
            <Image className='profile-image' src='https://avatars0.githubusercontent.com/u/30422493' size='medium' circular centered />
        )
    }

    renderTimeline() {
        return (
            <Segment inverted>
                <Header as="h2" inverted>Timeline</Header>
                
            </Segment>
        )
    }
}

export default Bio;
