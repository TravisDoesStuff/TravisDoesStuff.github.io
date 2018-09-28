import React, { Component } from 'react';
import { Container, Header, Card, Icon, Segment, Image } from 'semantic-ui-react';
import '../css/projects.css';

class Projects extends Component {
    render() {
        return (
            <Container className='page-projects'>
                { this.renderTitle() }
                { this.renderCards() }
            </Container>
        );
    }

    renderTitle() {
        return (
            <Container textAlign='center' className='projects-header'>
                <Header as='h1' color='grey inverted'>
                    <span className='project-title'>Projects</span>
                    <Header.Subheader>Lots and lots of iterations!</Header.Subheader>
                </Header>
            </Container>
        );
    }

    renderCards() {
        return(
            <Segment inverted className='opaque'>
                <Card.Group centered className='projects-section'>
                    <Card className='card-project'>
                        <a href='https://github.com/TravisDoesStuff/Rorschach' target='_'>
                            <div style={{'background-image': 'url(https://github.com/TravisDoesStuff/Rorschach/raw/master/rorschach_readme.jpg)'}} className='project-image' />
                        </a>
                        <Card.Content>
                            <Card.Header>Rorschach</Card.Header>
                            <Card.Meta>MERN-stack Inkblot Test</Card.Meta>
                            <Card.Description>MERN-stack application where users were presented official inkblots and they inputted what they saw. They can then compare their results with other users.</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a href='https://github.com/TravisDoesStuff/Rorschach' target='_' >
                                <Icon name='github' />TravisDoesStuff/Rorschach
                            </a>
                        </Card.Content>
                    </Card>
                    <Card>
                        <a href='https://github.com/TravisDoesStuff/WeatherStation'>
                            <div style={{'background-image': 'url(https://github.com/TravisDoesStuff/WeatherStation/raw/master/screenshot.png)'}} className='project-image' />
                        </a>
                        <Card.Content>
                            <Card.Header>Weather Station Model</Card.Header>
                            <Card.Meta>Professional Weather Diagrams</Card.Meta>
                            <Card.Description>Android application giving current weather data to user based on meteorological station diagrams.</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a href='https://github.com/TravisDoesStuff/WeatherStation'>
                                <Icon name='github' />TravisDoesStuff/WeatherStation
                            </a>
                        </Card.Content>
                    </Card>
                    <Card>
                        <a href='https://github.com/TravisDoesStuff/TerrainGenerator'>
                            <div style={{'background-image': 'url(https://github.com/TravisDoesStuff/TerrainGenerator/raw/master/coolTerrain.png)'}} className='project-image' />
                        </a>
                        <Card.Content>
                            <Card.Header>Terrain Generator</Card.Header>
                            <Card.Meta>Proceedural Generation</Card.Meta>
                            <Card.Description>Utilizes the Square-Diamond Algorithm with a touch of my own mathematics to generate terrain.</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a href='https://github.com/TravisDoesStuff/TerrainGenerator'>
                                <Icon name='github' />TravisDoesStuff/TerrainGenerator
                            </a>
                        </Card.Content>
                    </Card>
                    <Card>
                        <a href='https://github.com/TravisDoesStuff/Beer-Recipes'>
                            <div style={{'background-image': 'url(https://github.com/TravisDoesStuff/Beer-Recipes/raw/master/demo.jpg)'}} className='project-image' />
                        </a>
                        <Card.Content>
                            <Card.Header>Beer-Recipes</Card.Header>
                            <Card.Meta>Pintrest for Beers</Card.Meta>
                            <Card.Description>Single-page application using React to allow users to design beer recipes, including features such as searching for recipes and ingredients.</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a href='https://github.com/TravisDoesStuff/Beer-Recipes'>
                                <Icon name='github' />TravisDoesStuff/Beer-Recipes
                            </a>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </Segment>
        )
    }
}

export default Projects;
