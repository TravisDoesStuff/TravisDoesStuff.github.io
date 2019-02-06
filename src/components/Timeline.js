import React, { Component } from 'react';
import { Header, Accordion, Icon, List, Container, Transition } from 'semantic-ui-react';

class Timeline extends Component {
    state = { activeItem: '' };

    render() {
        let timeline = this.props.timeline;
        let activeItem = this.state.activeItem;

        return (
            <div className='timeline'>
                <Header as='h2'>Timeline</Header>
                <Container className='segment-content'>
                { timeline.map((date,d) =>
                    <Accordion key={d}>

                        <Accordion.Title title={ date.title } onClick={ this.handleClick } active={ activeItem === date.title } style={{ 'fontSize': '16px', 'fontWeight': 'bold' }}>
                            <Icon name='dropdown' />
                            <Icon name={ date.icon } />
                            <span className='dateNav'>{ date.startDate } { date.endDate ? '- '+date.endDate : '' } -- { date.title }</span>
                        </Accordion.Title>

                        <Transition.Group animation='slide down' duration='500'>
                            {activeItem === date.title && 
                                <Container className="transition visible" style={{padding: '0 20px'}}>
                                    { date.description }
                                    <List bulleted>
                                    { date.tasks.map((task,t) =>
                                        <List.Item key={t}>{ task }</List.Item>
                                    )}
                                    </List>
                                </Container>
                            }
                        </Transition.Group>

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
