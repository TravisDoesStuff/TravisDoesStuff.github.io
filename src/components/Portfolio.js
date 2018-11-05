import React, { Component } from 'react';
import { Container, Grid, Menu, Header, Segment, Image, Modal } from 'semantic-ui-react';
import '../css/portfolio.css';

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

class Portfolio extends Component {
    render() {
        return (
            <Container className='page-portfolio'>
                { this.renderTitle() }
                { this.renderContent() }
            </Container>
        );
    }

    renderTitle() {
        return (
            <Container textAlign='center' className='portfolio-header'>
                <Header as='h1'>
                    <span className='portfolio-title title'>Portfolio</span>
                </Header>
            </Container>
        );
    }

    renderContent() {
        return (
            <Grid stackable>
                { this.renderMenu() }
                { this.renderGallery() }
            </Grid>
        )
    }

    renderMenu() {
        return (
            <Grid.Column width={3}>
                <Segment inverted className='opaque'>
                    <Menu fluid vertical tabular inverted>
                        <Menu.Item name="graphics" onClick={ this.handleSideMenu }></Menu.Item>
                        <Menu.Item name="audioVideo" onClick={ this.handleSideMenu }></Menu.Item>
                    </Menu>
                </Segment>
            </Grid.Column>
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

export default Portfolio;
