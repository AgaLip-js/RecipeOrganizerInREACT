import React from "react";
import styled from "styled-components";

const StyledFooterContainer = styled.footer`
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: #f2a22c;
  z-index: 1;
`;
const StyledFooterList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  align-items: center;
  color: white;
  padding-left: 0;
  font-size: 14px;
`;
const StyledFooterSection = styled.li`
  text-align: center;
  align-items: center;
  transition: background, transform 0.2s;

  :hover {
    cursor: pointer;
    position: relative;
    transform: translateY(-1px);
    transition: transform 0.2s;
    border-bottom: 1px solid white;
  }
`;

const Footer = () => {
  return (
    <StyledFooterContainer>
      <StyledFooterList>
        <StyledFooterSection>Kontakt</StyledFooterSection>
        <StyledFooterSection>O stronie</StyledFooterSection>
        <StyledFooterSection>Księga Gości</StyledFooterSection>
      </StyledFooterList>
    </StyledFooterContainer>
  );
};

export default Footer;
