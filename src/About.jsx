import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Wrapper,
  Container,
  Title,
  Intro,
  MainSection,
} from './Styled-Components/Divs.jsx';

// const Image = styled.div`
//   justify-self: self-end;
//   & > img {
//     height: 652px;
//     width: auto;
//   }
// `;

const Image = styled.div`
  object-fit: contain;
  > img {
    max-width: 100%;
    height: 652px;
  }
`;

const Biography = styled.div`
  justify-self: self-start;
  max-width: auto;
  height: 652px;
  padding: 30px;
  line-height: 1.8em;
  background-color: #fff;
`;

class About extends Component {
  render() {
    return (
      <Wrapper>
        <Container className="box">
          <Title>
            <h1>ABOUT</h1>
            <h2>OLENA DMYTRENKO, DECORATOR</h2>
          </Title>
          <Intro>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Intro>
          <MainSection>
            <Image>
              <img alt="Portrait" src="/assets/portrait.jpg" />
            </Image>
            <Biography>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Biography>
          </MainSection>
        </Container>
      </Wrapper>
    );
  }
}

export default About;
