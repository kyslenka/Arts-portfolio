import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
`;

const Container = styled.div`
  display: grid;
  width: 90%;
  min-height: 1020px;
  margin: 0 auto;
  background-color: #fbded8;
`;

const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin-top: 60px;
`;

const Intro = styled.div`
  margin: 0 auto;
  height: 115px;
  width: 720px;
  & > p {
    line-height: 1.8em;
    text-align: center;
  }
`;

const MainSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
`;

const Image = styled.div`
  justify-self: self-end;
  & > img {
    height: 652px;
  }
`;

const Biography = styled.div`
  box-sizing: border-box;
  justify-self: self-start;
  width: 437px;
  height: 652px;
  padding: 30px;
  line-height: 1.8em;
  background-color: #fff;
`;

class About extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Title>
            <h1>ABOUT</h1>
            <h4>OLENA DMYTRENKO, DECORATOR</h4>
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
