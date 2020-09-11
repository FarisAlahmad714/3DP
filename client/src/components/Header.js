import React from "react";
import styled from "styled-components";
import logo from "./../../src/Logo.png";
const Header = () => {
  return (
    <HeaderContainer>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href="/3dreamprints">
          <img src={logo} alt="logo" width="150px" />
        </a>
      </nav>
    </HeaderContainer>
  );
};

export default Header;

// Main container
const HeaderContainer = styled.header`
  background: url(../../images1/3dhomebg.png) no-repeat center/cover;
  height: 15rem;

  h1 {
    transform: translate(-50%, -50%);
    color: black;
    font-weight: 900;
    position: absolute;
    top: 25%;
    left: 50%;
  }
`;
