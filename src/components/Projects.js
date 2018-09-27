import React, { Component } from 'react';
import { Container, Header, Card, Icon } from 'semantic-ui-react';

class Projects extends Component {
    render() {
        return (
            <Container>
                { this.renderTitle() }
                { this.renderCards() }
            </Container>
        );
    }

    renderTitle() {
        return (
            <Container textAlign='center'>
                <Header as='h1' color='grey inverted'>
                    <span>Projects</span>
                </Header>
            </Container>
        );
    }

    renderCards() {
        return(
            <Card.Group>
                <Card>
                    <Card.Content>
                        <Card.Header>Rorschach</Card.Header>
                        <Card.Meta>MERN-stack Inkblot Test</Card.Meta>
                        <Card.Description>MERN-stack application where users were presented official inkblots and they inputted what they saw. They can then compare their results with other users.</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a href='https://github.com/TravisDoesStuff/Rorschach' target='_'>
                            <Icon name='github' />TravisDoesStuff/Rorschach
                        </a>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <Card.Header>Weather Station Model</Card.Header>
                        <Card.Meta>Professional Weather Diagrams</Card.Meta>
                        <Card.Description>Android application giving current weather data to user based on meteorological station diagrams. Data provided by OpenWeatherMap API; location provided by Google Location Services.</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a href='https://github.com/TravisDoesStuff/WeatherStation'>
                            <Icon name='github' />TravisDoesStuff/WeatherStation
                        </a>
                    </Card.Content>
                </Card>
            </Card.Group>
        )
    }
}

export default Projects;
