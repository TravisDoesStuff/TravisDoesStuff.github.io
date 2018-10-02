import React, { Component } from 'react';
import { Container, Header, Card, Icon, Segment } from 'semantic-ui-react';
import '../css/projects.css';

import ProjectList from '../data/Projects';

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
                </Header>
            </Container>
        );
    }

    renderCards() {
        return(
            <Segment inverted className='opaque'>
                <Card.Group centered className='projects-section'>
                    { ProjectList.projects.map( project => 
                        <Card>
                            <a href={ project.link } target='_'>
                                <div style={{ 'backgroundImage': 'url('+project.image+')' }} className='project-image' />
                            </a>
                            <Card.Content>
                                <Card.Header>{ project.title }</Card.Header>
                                <Card.Meta>{ project.meta }</Card.Meta>
                                <Card.Description>{ project.description }</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a href={ project.githubLink } target='_' >
                                    <Icon name='github' />{ project.githubTitle }
                                </a>
                            </Card.Content>
                        </Card>
                    )}
                </Card.Group>
            </Segment>
        )
    }
}

export default Projects;
