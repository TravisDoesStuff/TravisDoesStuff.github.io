import React, { Component } from 'react';
import { Header, Accordion, Icon, List } from 'semantic-ui-react';

import Person from '../data/Person';

class Timeline extends Component {
    render() {
        return (
            <div>
                <Header as='h2' inverted>Timeline</Header>
                <List as='ul' inverted>
                    { Person.history.map( date =>
                    <List.Item>
                        <Icon name={ date.icon } inverted />
                        <List.Content>
                            <List.Header style={{ width: '100%' }}>
                                { date.title }
                                <List.Content floated='right'>{ date.startDate } - { date.endDate }</List.Content>
                            </List.Header>
                            <List.Description>{ date.description} </List.Description>
                            <List.List>
                                { date.tasks.map( task =>
                                    <List.Item as='ul'>{ task }</List.Item>
                                )}
                            </List.List>
                        </List.Content>
                    </List.Item>
                    )}
                </List>
            </div>
        );
    }
}

export default Timeline;
