import React, { Component } from 'react';
import { Container, Segment, Form, Header, Divider } from 'semantic-ui-react';
import '../css/contact.css';

class Contact extends Component {

    render() {
        return (
            <Container>
                { this.renderTitle() }
                { this.renderForm() }
            </Container>
        );
    }

    renderTitle() {
        return (
            <Container textAlign='center' className='container-contact-title'>
                <Header as='h1' color='grey inverted'>
                    <span className='contact-title'>Contact Me</span>
                </Header>
            </Container>
        );
    }

    renderForm() {
        return (
            <Segment inverted className='opaque segment-form'>
                <Form inverted className='form-contact'>
                    <Form.Group>
                        <Form.Input label='First Name' />
                        <Form.Input label='Last Name' />
                    </Form.Group>
                    <Form.Input label='Title' />
                    <Divider />
                    <Form.TextArea label='Questions? Comments?' />
                    <Divider />
                    <Form.Button>Submit</Form.Button>
                </Form>
            </Segment>
        )
    }
}

export default Contact;
