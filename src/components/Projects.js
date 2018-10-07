import React, { Component } from 'react';
import { Container, Header, Card, Icon, Segment } from 'semantic-ui-react';
import '../css/projects.css';

class Projects extends Component {
    constructor() {
        super();
        this.state = { projects: [] };
    }

    componentWillMount() {
        this.fetchProjects();
    }

    fetchProjects = () => {
        fetch('/api/projects')
        .then(data => data.json())
        .then((res) => {
            this.setState({ projects: res.data });
        });
    }

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
                <Header as='h1'>
                    <span className='project-title title'>Projects</span>
                </Header>
            </Container>
        );
    }

    renderCards() {
        return(
            <Segment inverted className='opaque'>
                <Card.Group centered className='projects-section'>
                    { this.state.projects.map((project) => 
                        <Card key={project._id}>
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
