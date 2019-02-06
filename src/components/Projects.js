import React, { Component } from 'react';
import { Header, Card, Icon, Image, Modal, Menu, Divider, Container, Button } from 'semantic-ui-react';
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
            <div>
                { this.renderTitle() }
                <div className='projects-section'>
                    { this.renderProjects() }
                    <Divider />
                    { this.renderGraphics() }
                    <Divider />
                    { this.renderAudioVideo() }
                </div>
                { this.renderFloor() }
            </div>
        );
    }

    renderTitle() {
        return (
            <div className='projects-header'>
                <div className='project-title title'>Projects</div>
            </div>
        );
    }

    renderNav() {
        return (
            <div className='nav-section'>
                <Menu fluid widths={3}>
                    <Menu.Item>Development</Menu.Item>
                    <Menu.Item>Graphics</Menu.Item>
                    <Menu.Item>Audio/Video</Menu.Item>
                </Menu>
            </div>
        )
    }

    renderProjects() {
        return(
            <Container className='projects-block'>
                <Header as='h2'>Development:</Header>
                <Card.Group centered>
                    { this.state.projects.map((project) => 
                        <Card key={project._id}>
                            <a href={ project.link } target='_'>
                                <div style={{ 'backgroundImage': 'url('+project.image+')' }} className='project-image'>
                                    <div className='project-image_overlay'>
                                        <div className='mediaIcon'><Icon name='external' size='huge' /></div>
                                    </div>
                                </div>
                            </a>
                            <Card.Content>
                                <Card.Header>{ project.title }</Card.Header>
                                <Card.Meta>{ project.meta }</Card.Meta>
                                <Card.Description>{ project.description }</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a href={ project.githubLink } target='_' className='project-github-link'>
                                    <Icon name='github' />{ project.githubTitle }
                                </a>
                            </Card.Content>
                        </Card>
                    )}
                </Card.Group>
            </Container>
        )
    }

    renderGraphics() {
        return (
            <Container className='projects-block'>
                <Header as="h2">Graphics:</Header>
                    <Card.Group centered>
                        { Gallery.threedGraphics.map((media) => {
                            return this.renderThreeMedia(media);
                        })}
                    </Card.Group>
                    <Container className='graphics-nav'>
                        <Button icon color='blue' labelPosition='right' href={ 'https://github.com/TravisDoesStuff/design' } target='_blank' size='large'>
                            More
                            <Icon name='arrow right' />
                        </Button>
                    </Container>
            </Container>
        )
    }

    renderAudioVideo() {
        return (
            <Container className='projects-block'>
                <Header as="h2">Audio/Video:</Header>
                <Card.Group centered>
                    { Gallery.audioVideo.map((audioVideo) => 
                        this.renderVideo(audioVideo)
                    )}
                </Card.Group>
            </Container>
        )
    }

    renderFloor() {
        return (
            <div className="floor-section"></div>
        )
    }

    renderThreeMedia(media) {
        if(media.type === 'image')
            return this.renderThumbnail(media)
        else if(media.type === 'youtube')
            return this.renderVideo(media)
    }

    renderThumbnail(media) {
        let thumbnail = <div style={{ 'backgroundImage': `url(${media.link})` }} className='project-image'>
            <div className='project-image_overlay'>
                <div className='mediaIcon'><Icon name='magnify' size='huge' /></div>
            </div>
        </div>

        return (
            <Card key={media.id}>
                <Modal trigger={thumbnail} basic size={ media.size } centered={ false } dimmer='blurring' style={{top: '10%'}} closeIcon>
                    <Modal.Content>
                        <Image src={ media.link } style={{margin: 'auto'}} />
                    </Modal.Content>
                </Modal>
                <Card.Content>
                    <Card.Header>{ media.title }</Card.Header>
                </Card.Content>
            </Card>
        )
    }

    renderVideo(media) {
        let thumbnail = <div style={{ 'backgroundImage': `url(https://img.youtube.com/vi/${media.id}/mqdefault.jpg)` }} className='project-video'>
            <div className='project-image_overlay'>
                <div className='mediaIcon'><Icon name='youtube play' size='huge' /></div>
            </div>
        </div>

        return (
            <Card key={media.id}>
                <Modal trigger={thumbnail} basic centered={ false } dimmer='blurring' style={{top: '10%'}}>
                    <Modal.Content style={ styleModalVideo }>
                        <iframe width='500' height='300' src={ `https://www.youtube.com/embed/${media.id}` } title={ media.title } frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen style={ styleYoutubeEmbeded } />
                    </Modal.Content>
                </Modal>
                <Card.Content>
                    <Card.Header>{ media.title }</Card.Header>
                </Card.Content>
            </Card>
        )
    }
}

export default Projects;
