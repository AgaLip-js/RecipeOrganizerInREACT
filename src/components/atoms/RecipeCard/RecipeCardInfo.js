import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faBookOpen,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import "./RecipeCard.css";
import { useDispatch } from "react-redux";
import { openModal } from "../../../actions";

const StyledRecipeTitle = styled.h2`
  position: relative;
  z-index: 11;
  font-size: 14px;
  margin: 10px;
  background: white;
  color: rgba(0, 0, 0, 0.7);
`;
const StyledOpenTable = styled.div`
  transition: all 0.4s linear;
  z-index: 11;
  position: relative;
  width: 100%;
  opacity: 1;
  background: white;
  margin-top: 15px;
`;
const StyledInfoTable = styled.div`
  display: flex;
  justify-content: space-around;
`;
const StyledIconContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-auto-rows: 25px 25px;
  align-items: center;
  width: fit-content;
  font-size: 12px;
`;
const StyledValue = styled.p`
  color: rgb(242, 162, 44);
  font-size: 14px;
  font-weight: bold;
  margin: 0;
`;
const StyledAccount = styled.p`
  grid-column: 1/3;
  grid-row-start: 2;
`;
const RecipeCardInfo = ({
  ingredientsQuantity,
  portion,
  preparingTime,
  title,
  recipe,
}) => {
  const dispatch = useDispatch();
  const handleAddClick = (recipe) => {
    dispatch(openModal(recipe));
  };
  return (
    <div className="RecipeCardInfo">
      <StyledRecipeTitle> {title} </StyledRecipeTitle>
      <StyledOpenTable>
        <StyledInfoTable>
          <StyledIconContainer>
            <FontAwesomeIcon icon={faClock} />
            <StyledValue>{preparingTime}</StyledValue>
            <StyledAccount>Minuty</StyledAccount>
          </StyledIconContainer>
          <StyledIconContainer>
            <FontAwesomeIcon icon={faBookOpen} />
            <StyledValue>{ingredientsQuantity}</StyledValue>
            <StyledAccount>Składniki</StyledAccount>
          </StyledIconContainer>
          <StyledIconContainer>
            <FontAwesomeIcon icon={faUserFriends} />
            <StyledValue>{portion}</StyledValue>
            <StyledAccount>Porcje</StyledAccount>
          </StyledIconContainer>
        </StyledInfoTable>
        <Button secondary onClick={() => handleAddClick(recipe)}>
          Zobacz przepis
        </Button>
      </StyledOpenTable>
    </div>
  );
};

export default RecipeCardInfo;
