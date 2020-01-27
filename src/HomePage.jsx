import React, { Component } from "react";
import styled from "styled-components";
import "./main.css";
import Slider from "./Slider.jsx";

const Wrapper = styled.div`
  display: grid;
  grid-auto-rows: 1fr 0.7fr 0.8fr 0.1fr;
`;

const Heading = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  opacity: 0.9;
  height: 528px;
  width: 500px;
  background-image: url("/assets/splash.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  & > h1 {
    position: absolute;
    z-index: 1;
    top: 40%;
    left: 52%;
    transform: translate(-50%, -40%);
    text-align: center;
    width: 300px;
    font-family: "Fredericka the Great", cursive;
    font-size: 2.5em;
  }
`;

const Parallax = styled.div`
  background-image: url("/assets/crafts.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  margin: 0 5vw;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 5vw;
  background-color: #f7e7e8;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    height: 90%;
    max-width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

const Main = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 0.3fr);
  align-items: center;
  box-sizing: border-box;
  line-height: 1.8em;
  max-width: 400px;
  & > h1 {
    font-weight: bold;
    font-size: 2em;
  }
`;

const Button = styled.button`
  background: none;
  border: 2px solid;
  border-radius: 3px;
  font: inherit;
  font-size: 1.1em;
  line-height: 1;
  margin: 0.5em;
  padding: 1em 1.5em;
  cursor: pointer;
  max-width: 160px;
  color: #000;
  transition: 0.25s;
  letter-spacing: 1px;
  &:hover,
  &:focus {
    border-color: rgb(66, 66, 65);
    color: #000;
  }
`;

class HomePage extends Component {
  render() {
    return (
      <Wrapper>
        <Heading>
          <h1>Art of Craft</h1>
        </Heading>
        <Parallax></Parallax>
        <Section>
          <ImageContainer>
            <img src="/assets/artist.jpg" alt="Artist Portrait" />
          </ImageContainer>
          <Main>
            <h1>About</h1>
            <div className="style">
              {"Olena Dmytrenko \nDecorator & Craft Artist"}
            </div>
            <div>
              I'm an artist passionate about creating beautiful and unique items
              that reflect the beauty of the world around. I use different
              materials, textures and techniques in my art.{" "}
            </div>
            <div>
              <Button className="offset">Read More</Button>
            </div>
          </Main>
        </Section>
        <Slider />
      </Wrapper>
    );
  }
}

export default HomePage;
