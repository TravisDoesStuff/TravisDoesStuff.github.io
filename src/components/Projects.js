import React, { Component } from 'react';
import { Container, Header, Card, Icon, Segment, Grid, Image, Modal } from 'semantic-ui-react';
import '../css/projects.css';

import ProjectList from '../data/Projects';
import Gallery from '../data/Portfolio';

const styleModalVideo = {
    position: 'relative',
    paddingBottom: '56.25%',
    paddingTop: '25px',
    height: '300px'
}
const styleYoutubeEmbeded = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%'
}

class Projects extends Component {
    constructor() {
        super();
        this.state = { projects: [] };
    }

    componentWillMount() {
        this.fetchProjects();
    }

    fetchProjects = () => {
        // fetch('/api/projects')
        // .then(data => data.json())
        // .then((res) => {
        //     this.setState({ projects: res.data });
        // });
        this.setState({ projects: ProjectList.projects });
    }

    render() {
        return (
            <Container className='page-projects'>
                { this.renderTitle() }
                { this.renderProjects() }
                { this.renderGallery() }
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

    renderProjects() {
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

    renderGallery() {
        return (
            <Grid.Column width={13}>
                <Segment inverted className='opaque' id="graphics">
                    <Header as="h3">3D Graphics</Header>
                    { Gallery.threedGraphics.map((media) => {
                        return this.renderThreeMedia(media);
                    })}
                </Segment>

                <Segment inverted className='opaque' id="audioVideo">
                    <Header as="h3">Audio Video</Header>
                    { Gallery.audioVideo.map((audioVideo) => 
                        this.renderVideo(audioVideo)
                    )}
                </Segment>
            </Grid.Column>
        )
    }

    renderThreeMedia(media) {
        if(media.type === 'image')
            return this.renderThumbnail(media)
        else if(media.type === 'youtube')
            return this.renderVideo(media)
    }

    renderThumbnail(media) {
        return (
            <div className='media-container' key={ media.id }>
                <Modal trigger={<Image src={ media.link } size={ media.size } style={{cursor: 'pointer'}} />} basic size={ media.size } centered={ false } dimmer='blurring' style={{top: '10%'}} closeIcon>
                    <Modal.Content>
                        <Image src={ media.link } style={{margin: 'auto'}} />
                    </Modal.Content>
                </Modal>
            </div>
        )
    }

    renderVideo(media) {
        return (
            <div className='media-container' key={ media.id }>
                <Modal trigger={<Image src={ `https://img.youtube.com/vi/${media.id}/mqdefault.jpg` } style={{cursor: 'pointer'}} />} basic centered={ false } dimmer='blurring' style={{top: '10%'}}>
                    <Modal.Content style={ styleModalVideo }>
                        <iframe width='500' height='300' src={ `https://www.youtube.com/embed/${media.id}` } title={ media.title } frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen style={ styleYoutubeEmbeded } />
                    </Modal.Content>
                </Modal>
            </div>
        )
    }
}

export default Projects;
