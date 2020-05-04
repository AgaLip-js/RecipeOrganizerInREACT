import React from "react";
import defaultImg from "../../../assets/pictures/default-img.jpg";
import styled from "styled-components";

const StyledRecipeImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: center;
`;
const StyledRecipeCard = styled.div`
  position: relative;
`;
const StyledRecipeTitle = styled.p`
  position: absolute;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  padding: 10px;
  border-radius: 5px;
  color: white;
  background: white;
  z-index: 10;
  width: 100%;
  flex-wrap: wrap;
  transition: all 0.2s linear;
  cursor: pointer;
  background: #f2a22c;
  bottom: 0;
`;
const MealCard = ({ name, img }) => {
  return (
    <StyledRecipeCard>
      <StyledRecipeImage src={defaultImg} />
      <StyledRecipeTitle>{name}</StyledRecipeTitle>
    </StyledRecipeCard>
  );
};

export default MealCard;
