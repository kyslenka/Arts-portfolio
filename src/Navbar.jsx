import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 5vw;
  height: 10vh;
`;
const LogoLink = styled(Link)`
  text-decoration: none;
`;
const Logo = styled.div`
  color: black;
  margin: 0;
  font-family: "Great Vibes", cursive;
  padding: 10px;
  font-size: 2em;
  transition: opacity 0.2s ease-in-out;
  text-shadow: 6px 5px 1px #c3bdbd;
  &:hover {
    opacity: 0.5;
    color: #fff;
  }
`;
const NavLinks = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const NavLink = styled(Link)`
  margin: 0;
  color: black;
  text-decoration: none;
  padding: 10px;
  &:hover {
    color: #fff;
  }
`;

class Navbar extends Component {
  render() {
    return (
      <Wrapper>
        <LogoLink to="/">
          <Logo>Mrs. Olena</Logo>
        </LogoLink>
        <NavLinks>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/portfolio">PORTFOLIO</NavLink>
          <NavLink to="/shop">SHOP</NavLink>
          <NavLink to="/blog">BLOG</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
        </NavLinks>
      </Wrapper>
    );
  }
}

export default Navbar;
