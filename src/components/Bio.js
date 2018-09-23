import React, { Component } from 'react';
import Person from '../data/Person';
import { Header, List, Grid, Image } from 'semantic-ui-react';
import '../css/bio.css';

class Bio extends Component {

    render() {
        return (
            <div className='page-bio'>
                <h1>{ Person.name }</h1>
                { this.renderAbout() }
                <Grid relaxed columns={2} style={{'margin-top': '30px'}}>
                    <Grid.Column>{ this.renderSkills() }</Grid.Column>
                    <Grid.Column>{ this.renderImage() }</Grid.Column>
                </Grid>
            </div>
        );
    }

    renderAbout() {
        return (
            <div>  
                { Person.description.map(paragraph => 
                    <p>{ paragraph }</p>
                )}
            </div>
        )
    }

    renderSkills() {
        return (
            <div>
                <Header as='h2'>Skills</Header>
                <Grid columns={3}>
                    { Person.skills.map(skill => 
                        <Grid.Column>
                            <Header as="h4">{skill.category}</Header>
                            <List bulleted>
                                { skill.skills.map(s =>
                                    <List.Item>{ s }</List.Item>
                                )}
                            </List>
                        </Grid.Column>
                    )}
                </Grid>
            </div>
        )
    }

    renderImage() {
        return (
            <Image className='profile-image' src='https://avatars0.githubusercontent.com/u/30422493' size='medium' circular />
        )
    }
}

export default Bio;
