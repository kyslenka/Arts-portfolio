import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
`;
const LogoLink = styled(Link)`
  text-decoration: none;
`;
const Logo = styled.h1`
  color: black;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px;
`;
const NavLinks = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 30px;
  &:hover {
    color: #ddd;
  }
`;

class Navbar extends Component {
  render() {
    return (
      <Wrapper>
        <LogoLink to="/">
          <Logo>Pani Olena</Logo>
        </LogoLink>
        <NavLinks>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/portfolio">PORTFOLIO</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/shop">SHOP</NavLink>
          <NavLink to="/blog">BLOG</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
        </NavLinks>
      </Wrapper>
    );
  }
}

export default Navbar;
