import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  margin: 0 20px;
`;
const Container = styled.div`
  display: grid;
  width: 100%;
  height: auto;
  grid-gap: 15px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(220px, auto);
`;
const Image = styled.div`
  overflow: hidden;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: 0.7;
    transition: transform 0.3s ease-in-out;
    transform: scale(1);
  }
  & > img:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;

class Portfolio extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Image>
            <img alt="Easter Eggs" src="/images/1.jpg" />
          </Image>
          <Image className="grid-item-2">
            <img alt="Scrap Book" src="/images/2.jpg" />
          </Image>
          <Image>
            <img alt="Christmas Ornaments" src="/images/3.jpg" />
          </Image>
          <Image className="grid-item-4">
            <img alt="Christmas Ball" src="/images/4.jpg" />
          </Image>
          <Image>
            <img alt="Woolen Sheep" src="/images/5.jpg" />
          </Image>
          <Image>
            <img alt="Necklace" src="/images/6.jpg" />
          </Image>
          <Image>
            <img alt="Bracelet" src="/images/7.jpg" />
          </Image>
          <Image className="grid-item-8">
            <img alt="Christmas Wreath" src="/images/8.jpg" />
          </Image>
          <Image className="grid-item-9">
            <img alt="Bottles" src="/images/9.jpg" />
          </Image>
          <Image>
            <img alt="Flowers" src="/images/10.jpg" />
          </Image>
          <Image>
            <img alt="Embroidery" src="/images/11.jpg" />
          </Image>
          <Image>
            <img alt="Cookies" src="/images/12.jpg" />
          </Image>
        </Container>
      </Wrapper>
    );
  }
}

export default Portfolio;
