import React, { Component } from 'react';
import { Container, Segment, Form, Header, Divider, Message } from 'semantic-ui-react';
import '../css/contact.css';

const nameLimit = 20;
const maxComment = 500;

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            title: "",
            comment: "",
            commentLength: 0,
            isSubmitted: false
        }
        
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    render() {
        return (
            <Container>
                { this.renderTitle() }
                { this.renderContent() }
                { this.renderSpace() }
            </Container>
        );
    }

    renderSpace() {
        return(
          <div className='Contact-space'></div>
        )
      }

    renderTitle() {
        return (
            <Container textAlign='center' className='container-contact-title'>
                <Header as='h1'>
                    <span className='contact-title title'>Contact Me</span>
                </Header>
            </Container>
        );
    }

    renderContent() {
        if(!this.state.isSubmitted) {
            return this.renderForm();
        } else {
            return this.renderSubmitted();
        }
    }

    renderForm() {
        let characterUse = this.state.commentLength;

        return (
            <Segment inverted className='opaque segment-form'>
                <Form inverted className='form-contact'>
                    <Form.Group widths='equal'>
                        <Form.Input label='First Name' name='firstName' onChange={this.handleInputChange} value={this.state.firstName} maxLength={nameLimit} />
                        <Form.Input label='Last Name' name='lastName' onChange={this.handleInputChange} value={this.state.lastName} maxLength={nameLimit} />
                    </Form.Group>
                    <Form.Input label='Title' name='title' onChange={this.handleInputChange} value={this.state.title} maxLength={nameLimit} />
                    <Divider />
                    <Form.TextArea label='Questions? Comments?' name='comment' onChange={this.handleInputChange} value={this.state.comment} maxLength={maxComment} />
                    <span>{characterUse} / {maxComment} characters used.</span>
                    <Divider />
                    <Form.Button onClick={this.handleSubmit.bind()}>Submit</Form.Button>
                </Form>
            </Segment>
        )
    }

    renderSubmitted() {
        return (
            <Segment inverted className='opaque segment-form'>
                <Message positive>
                    <Message.Header>Thank You!</Message.Header>
                    <p>Your message has been received.</p>
                </Message>
            </Segment>
        )
    }

    handleInputChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        let invalid = false;

        if(name === 'comment'){
            if(value.length <= 500) {
                this.setState({commentLength: value.length});
            } else {
                invalid = true;
            }
        }

        if(!invalid) {
            this.setState({
                [name]: value
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let firstName = this.state.firstName;
        let lastName = this.state.lastName;
        let title = this.state.title;
        let comment = this.state.comment;

        if(this.validateName(firstName) && this.validateName(lastName) && this.validateName(title) && this.validateComment(comment)){
            this.setState({ isSubmitted: true });
            console.log('lol');
        }
    }

    validateName(name) {
        let isValid = false;
        if(name.length <= nameLimit && name){
            isValid = true;
        }

        return isValid;
    }

    validateComment(comment) {
        let isValid = false;
        if(comment.length <= maxComment && comment){
            isValid = true;
        }

        return isValid;
    }
}

export default Contact;
