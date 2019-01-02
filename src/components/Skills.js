import React, { Component } from 'react';
import { Header, Grid, Label } from 'semantic-ui-react';

class Skills extends Component {

    render() {
        const skills = this.props.skills;

        return (
            <div className='skill-section'>
                <Header as='h2'>Skills</Header>
                <Grid stackable>
                    <Grid.Row>
                        { skills.map((skillCategory,s) => 
                            <Grid.Column width={8} key={s}>
                                <div className='skill-column' key={s}>
                                    <Header as="h4">{ skillCategory.category }</Header>
                                
                                    { skillCategory.skills.map((skill,i) =>
                                        <Label key={i}>{ skill }</Label>
                                    )}
                                </div>
                            </Grid.Column>
                        )}
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default Skills;
