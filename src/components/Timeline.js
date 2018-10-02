import React, { Component } from 'react';
import { Header, Accordion, Icon, List, Container } from 'semantic-ui-react';

import Person from '../data/Person';

class Timeline extends Component {
    state = { activeItem: '' };

    render() {
        let activeItem = this.state.activeItem;

        return (
            <div>
                <Header as='h2' inverted>Timeline</Header>
                <Container className='segment-content'>
                { Person.history.map((date,d) =>
                    <Accordion inverted key={d}>

                        <Accordion.Title title={ date.title } onClick={ this.handleClick } active={ activeItem === date.title } style={{ 'fontSize': '16px', 'fontWeight': 'bold' }}>
                            <Icon name='dropdown' />
                            <Icon name={ date.icon } inverted />
                            { date.startDate } - { date.endDate } -- { date.title }
                        </Accordion.Title>

                        <Accordion.Content active={ activeItem === date.title }>
                            <Container style={{padding: '0 20px'}}>
                                { date.description }
                                <Container style={{padding: '10px 20px'}}>
                                    <List bulleted>
                                    { date.tasks.map((task,t) =>
                                        <List.Item key={t}>{ task }</List.Item>
                                    )}
                                    </List>
                                </Container>
                            </Container>
                        </Accordion.Content>

                    </Accordion>
                )}
                </Container>
            </div>
        );
    }

    handleClick = (e, {title}) => {
        let activeSegment = this.state.activeItem;

        if(activeSegment === title){
            this.setState({ activeItem: '' });
        } else {
            this.setState({ activeItem: title });
        }
    }
}

export default Timeline;
