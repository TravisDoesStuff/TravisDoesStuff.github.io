import React, { Component } from 'react';
import { Header, Grid, List, Container } from 'semantic-ui-react';

class Skills extends Component {

    render() {
        const skills = this.props.skills;

        return (
            <div className='skill-section'>
                <Header as='h2'>Skills</Header>

                <Container className='segment-content'>
                    <Grid stackable columns={4}>
                    { skills.map((skillCategory,s) => 
                        <Grid.Column key={s}>
                            <Header as="h4">{ skillCategory.category }</Header>
                            <List bulleted>
                            { skillCategory.skills.map((skill,i) =>
                                <List.Item key={i}>{ skill }</List.Item>
                            )}
                            </List>
                        </Grid.Column>
                    )}
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default Skills;
