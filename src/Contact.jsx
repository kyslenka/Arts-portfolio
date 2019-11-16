import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Wrapper,
  Container,
  Title,
  MainSection,
} from './Styled-Components/Divs.jsx';
import {
  FormWrapper,
  Form,
  Label,
  Input,
  Textarea,
  Button,
} from './Styled-Components/FormElements.jsx';

const Image = styled.div`
  > img {
    max-width: auto;
    height: 325px;
  }
`;

class Contact extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Title>
            <h1>GET IN TOUCH</h1>
          </Title>

          <MainSection>
            <Image>
              <img
                alt="Alt text goes here"
                src="http://www.nomadtravellers.com/images/articles/ceramics-indonesia/12-ceramics-pottery-isi-indonesia.jpg"
              ></img>
            </Image>
            <FormWrapper>
              <p>
                I'm a paragraph. I’m a great place for you to tell a story and
                let your users know a little more about you.
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
          </MainSection>
        </Container>
      </Wrapper>
    );
  }
}

export default Contact;
