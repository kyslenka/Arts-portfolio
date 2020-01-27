import React from "react";
import { Fade } from "react-slideshow-image";
import styled from "styled-components";

const fadeImages = [
  "images/decoupage.jpg",
  "images/sewing.jpg",
  "images/bijoux.jpg",
  "images/ornaments.jpg",
  "images/postcards.jpg"
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e6cbd0;
  margin: 0 5vw;
  height: 90vh;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const SliderImage = styled.div`
  position: relative;
  background-image: url("/images/frame.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const SliderContainer = styled.div`
  width: 55%;
  border: 7px solid white;
  padding: 40px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const ImageContainer = styled.div`
  margin: 0;
  left: 0;
`;

const Title = styled.div`
  position: absolute;
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: #b0bac3;
  top: 70%;
  left: 70%;
  opacity: 0.8;
  height: 20%;
  font: inherit;
  font-size: 1.3em;
  font-weight: bold;
  letter-spacing: 2px;
`;

const Slider = () => {
  return (
    <Wrapper>
      <SliderImage></SliderImage>
      <SliderContainer className="slider">
        <Fade {...properties}>
          <div>
            <ImageContainer>
              <img src={fadeImages[0]} alt="Decoupage technique" />
            </ImageContainer>
            <Title>Decoupage</Title>
          </div>
          <div>
            <ImageContainer>
              <img src={fadeImages[1]} alt="Sewing materials" />
            </ImageContainer>
            <Title>Sewing</Title>
          </div>
          <div>
            <ImageContainer>
              <img src={fadeImages[2]} alt="Bijoux hand-making" />
            </ImageContainer>
            <Title>Bijoux</Title>
          </div>
          <div>
            <ImageContainer>
              <img src={fadeImages[3]} alt="Christmas Ornaments" />
            </ImageContainer>
            <Title>Ornaments</Title>
          </div>
          <div>
            <ImageContainer>
              <img src={fadeImages[4]} alt="Hand-made Postcards" />
            </ImageContainer>
            <Title>Postcards</Title>
          </div>
        </Fade>
      </SliderContainer>
    </Wrapper>
  );
};

export default Slider;
