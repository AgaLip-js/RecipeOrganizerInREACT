import React from "react";
import styled from "styled-components";

const StyledFooterContainer = styled.div`
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: #f2a22c;
`;
const StyledFooterList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  align-items: center;
  margin-bottom: 0;
  color: white;
  padding-left: 0;
  /* background: #f2a22c; */
`;
const StyledFooterSection = styled.li`
  text-align: center;
  align-items: center;
  padding-top: 12px;
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
