import React, { Component } from "react";
import styled from "styled-components";
import {
  Wrapper,
  Container,
  Title,
  Intro,
  MainSection
} from "./Styled-Components/Divs.jsx";

const Wrapper = styled.div`
  min-height: 100vh;
`;

const Container = styled.div`
  display: grid;
  width: 90%;
  min-height: 1020px;
  margin: 0 auto;
  margin-bottom: 50px;
  background-color: #f7e7e8;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Title = styled.div`
  text-align: center;
  margin-top: 2%;
`;

const Intro = styled.div`
  margin-left: auto;
  margin-right: auto;
  height: auto;
  width: 45%;
  & > p {
    line-height: 1.8em;
    text-align: center;
  }
`;

const MainSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  height: 90vh;
`;

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
        <Container>
          <Title>
            <h1>ABOUT</h1>
            <h2>OLENA ZEVELZEVA, DECORATOR</h2>
          </Title>
          <Intro>
            <p>
              I'm a design and style expert living and creating in Montreal. My
              mission is to inspire and encourage people to embrace the concept
              of “I see it. I like it. I make it.” I believe my mission is
              helping others stylishly personalize their lives through DIY.
            </p>
          </Intro>
          <MainSection>
            <Image>
              <img alt="Portrait" src="/assets/portrait.jpg" />
            </Image>
            <Biography>
              <p>
                I'm passionate about crafting beautiful objects and accessories
                that make everyday life more bright and fun. My inspirations
                come from visualizing the items I want to create and the
                materials I want to use. I work in different craft techniques,
                e.g. decoupage on textiles, glass and wood, hand-making
                bracelets, headbands and necklaces, sewing and decorating bags
                and clothes etc.
              </p>
              <p>
                My mission to help others reveal their natural artistic talents
                and desire to create inspired me to organize arts and crafts
                masterclasses for adults and children. It gives me a deep
                satisfaction to see how enlighten they become during the
                creative process and how many their own ideas they present to
                make their crafts more personalized. I'm always very proud of my
                students regardless the age, and to encourage them even more I
                display their crafted objects at Salon d'Art International.
              </p>
            </Biography>
          </MainSection>
        </Container>
      </Wrapper>
    );
  }
}

export default About;
