import React, { Component } from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 500px 400px;
  grid-template-areas: 'image contactForm';
`;

const ImageWrapper = styled.div`
  grid-area: image;
`;

const Image = styled.img`
  max-width: 100%;
`;

const FormWrapper = styled.div`
  padding: 15px;
  grid-area: contactForm;
`;

const Form = styled.div`
  padding-top: 15px;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  width: 100px;
  float: left;
  label:after {
    content: ': ';
  }
`;

const Input = styled.input`
  width: 250px;
`;

const Textarea = styled.textarea`
  width: 250px;
`;

const Button = styled.button`
  width: 250px;
  margin-left: 100px;
`;

class Contact extends Component {
  render() {
    return (
      <ContactWrapper>
        <ImageWrapper>
          <Image src="http://www.nomadtravellers.com/images/articles/ceramics-indonesia/12-ceramics-pottery-isi-indonesia.jpg"></Image>
        </ImageWrapper>
        <FormWrapper>
          <h1>GET IN TOUCH</h1>
          <p>
            I'm a paragraph. I’m a great place for you to tell a story and let
            your users know a little more about you.
          </p>
          <p>Tel: 123-456-7890 | Email: info@mysite.com</p>
          <Form>
            {/* Figure out form action */}
            <form action="">
              <Label htmlFor="name">Name: </Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
              />
              <br />
              <Label htmlFor="email">Email: </Label>
              <Input
                type="text"
                id="email"
                name="email"
                placeholder="Your email address"
              />
              <br />
              <Label htmlFor="subject">Subject: </Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
              />
              <br />
              <Label htmlFor="message">Message: </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Write something"
              ></Textarea>
              <br />
              <Button type="submit" value="Submit">
                Send
              </Button>
            </form>
          </Form>
        </FormWrapper>
      </ContactWrapper>
    );
  }
}

export default Contact;
