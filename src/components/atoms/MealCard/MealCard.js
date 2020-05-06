import React, { useState } from "react";
import defaultImg from "../../../assets/pictures/default-img.jpg";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenAlt } from "@fortawesome/free-solid-svg-icons";
import { removeMealDay, openMiniModal } from "../../../actions";
import { useDispatch, useSelector } from "react-redux";
import MiniModal from "../MiniModal/MiniModal";

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
  background: #f2a22c;
  bottom: 0;
`;
const StyledTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledRemoveButton = styled.button`
  height: 20px;
  font-size: 14px;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 5px;
  border: none;
  color: #fff;
  background: rgb(242, 162, 44);
  z-index: 16;
  bottom: 10px;
  position: relative;

  right: ${({ primary }) => (primary ? "66px" : "5px")};
  margin-left: ${({ primary }) => (primary ? "0px" : "10px")};

  }}
`;
const StyledEditButton = styled(StyledRemoveButton)``;
const StyledLink = styled.a`
  z-index: 16;
`;

const MealCard = ({ name, img, link, date, type }) => {
  const dispatch = useDispatch();

  const { open } = useSelector((store) => ({
    open: store.open,
  }));

  const removeCard = (date, type) => {
    dispatch(removeMealDay(date, type));
  };
  const openModal = (date, type) => {
    dispatch(openMiniModal(date, type));
  };
  return (
    <StyledRecipeCard>
      {img ? (
        <StyledRecipeImage src={img} />
      ) : (
        <StyledRecipeImage src={defaultImg} />
      )}
      <StyledTitleWrapper>
        {link !== "" ? (
          <StyledLink href={link} rel="noopener noreferrer" target="_blank">
            <StyledRecipeTitle>{name}</StyledRecipeTitle>
          </StyledLink>
        ) : (
          <StyledRecipeTitle>{name}</StyledRecipeTitle>
        )}
        {link !== "" ? (
          <StyledRemoveButton
            primary
            type="button"
            onClick={() => removeCard(date, type)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </StyledRemoveButton>
        ) : (
          <StyledRemoveButton
            type="button"
            onClick={() => removeCard(date, type)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </StyledRemoveButton>
        )}
        <StyledEditButton type="button" onClick={() => openModal(date, type)}>
          <FontAwesomeIcon icon={faPenAlt} />
        </StyledEditButton>
      </StyledTitleWrapper>
      {open && <MiniModal />}
    </StyledRecipeCard>
  );
};

export default MealCard;
