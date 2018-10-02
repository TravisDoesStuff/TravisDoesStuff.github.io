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
                        <Header as='h1'>
                            <span className='person-name title'>{ Person.name }</span>
                            <Header.Subheader><span  className='title'>{ Person.title }</span></Header.Subheader>
                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h4'><span className='title'><Icon name='map marker'/>{ Person.location }</span></Header>
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
            <Segment inverted className='opaque'>
                { Person.description.map((paragraph,p) => 
                    <p className='about-section' key={p}>{ paragraph }</p>
                )}
            </Segment>
        )
    }

    renderSkills() {
        return (
            <Grid relaxed stackable columns={2}>
                <Grid.Column>
                    <Segment inverted className='skill-section opaque'>
                        <Header as='h2' inverted>Skills</Header>
                        <Container className='segment-content'>
                            <Grid columns={3}>
                            { Person.skills.map((skill,s) => 
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
            <Segment inverted className='opaque'>
                <Timeline />
            </Segment>
        )
    }
}

export default Bio;
