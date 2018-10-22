import React, { Component } from 'react';
import { Header, Grid, List, Segment, Container } from 'semantic-ui-react';

class Skills extends Component {

    render() {
        const skills = this.props.skills;

        return (
            <Segment inverted className='opaque'>

                <Header as='h2' inverted>Skills</Header>

                <Container className='segment-content'>
                    <Grid stackable columns={4}>
                    { skills.map((skillCategory,s) => 
                        <Grid.Column key={s}>
                            <Header as="h4" inverted>{ skillCategory.category }</Header>
                            <List bulleted>
                            { skillCategory.skills.map((skill,i) =>
                                <List.Item key={i}>{ skill }</List.Item>
                            )}
                            </List>
                        </Grid.Column>
                    )}
                    </Grid>
                </Container>
            </Segment>
        )
    }
}

export default Skills;
