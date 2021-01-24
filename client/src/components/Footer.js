import React from "react";
import styled from "styled-components";
import { SocialIcon } from "react-social-icons";
import { Link } from "@reach/router";
const Footer = () => {
  return (
    <FooterContainer>
      {""}
      <div>
        <Link to="/homepage" style={{ color: "#fff" }}>
          About
        </Link>
        {" | "}
        <Link to="/3dreamprints/terms" style={{ color: "#fff" }}>
          Terms& Services
        </Link>
        {" | "}
        <Link to="/3dreamprints/contact" style={{ color: "#fff" }}>
          Contact Us
        </Link>
        {" | "}
        <Link to="/3dreamprints/help" style={{ color: "#fff" }}>
          Help
        </Link>
        <p class="font-weight-light" id="footerdream">
          Dreams in the form of 3DPrinting
        </p>
        <p class="font-weight-light">Light weight text.</p>
        <SocialIcon
          url="http://reddit.com/in/farisalahmad"
          style={{ height: 25, width: 25 }}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/faris-alahmad-115670139/"
          style={{ height: 25, width: 25 }}
        />
        <SocialIcon
          url="https://www.facebook.com/faris.alahmad.10/"
          style={{ height: 25, width: 25 }}
        />
      </div>
      <span
        style={{
          color: "fff",
          top: "1.5rem",
          left: "1rem",
          position: "bottom",
        }}
      >
        &copy;2020 All Rights Reserved. 3DreamPrint LLC.
      </span>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background: #dbccc9;
  height: 10rem;
  positon: fixed;
  left: 0;
  bottom: 100;
  width: 100%;
`;
