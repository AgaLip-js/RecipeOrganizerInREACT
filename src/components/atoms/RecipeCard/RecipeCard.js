import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faHeart } from "@fortawesome/free-solid-svg-icons";
import recipe1 from "../../../assets/pictures/recipe1.jpg";
import RecipeCardInfo from "./RecipeCardInfo";
import "./RecipeCard.css";

const StyledMainPanel = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 32px;
  margin: 50px 50px;
  position: relative;
`;
const StyledCardContainer = styled.div`
  grid-auto-rows: 250px 50px;
  position: relative;
  display: grid;
  overflow: hidden;
  transition: all 0.4s linear;
  :hover {
    box-shadow: 0 0 88px 0 rgba(0, 0, 0, 0.1607843137254902);
  }
  :hover .RecipeCardInfo {
    transform: translateY(-90px);
  }
`;
const StyledImageSection = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;
`;
const StyledRecipeImage = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  transition: opacity 0.4s linear;
  object-fit: cover;
  object-position: center;
  ${StyledCardContainer}:hover & {
    opacity: 0.5;
  }
`;

const StyledDataIcon = styled.span`
  position: absolute;
  font-size: 12px;
  z-index: 3;
  letter-spacing: 2px;
  opacity: 0;
  margin-top: 10px;
  transition: all 0.3s linear;
  top: 0px;
  right: 0px;
  display: flex;
  transform: translateX(100%);
  ${StyledCardContainer}:hover & {
    transform: translateX(0%);
    opacity: 1;
    z-index: 5;
    transition: all 0.3s linear;
    right: 5px;
  }
`;
const StyledLikeIcon = styled.span`
  position: absolute;
  font-size: 20px;
  z-index: 1;
  color: black;
  opacity: 0;
  margin: 10px;
  transition: all 0.3s linear;
  left: 0px;
  top: -4px;
  ${StyledCardContainer}:hover & {
    opacity: 1;
    z-index: 5;
    transition: all 0.3s linear;
  }
  :hover {
    color: rgb(242, 162, 44);
    cursor: pointer;
  }
`;

const RecipeCard = () => {
  return (
    <StyledMainPanel>
      <StyledCardContainer>
        <StyledImageSection>
          <StyledRecipeImage src={recipe1} />
          <StyledDataIcon>
            <FontAwesomeIcon
              icon={faCalendarAlt}
              style={{ marginRight: "5px" }}
            />
            22.06.2020
          </StyledDataIcon>
          <StyledLikeIcon>
            <FontAwesomeIcon icon={faHeart} />
          </StyledLikeIcon>
        </StyledImageSection>
        <RecipeCardInfo secondary />
      </StyledCardContainer>
    </StyledMainPanel>
  );
};

export default RecipeCard;