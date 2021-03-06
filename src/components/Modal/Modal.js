import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import Form from "../atoms/Form/Form";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../actions";

const StyledWrapper = styled.div`
  display: block;
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const StyledButtonClose = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  height: fit-content;
  text-align: end;
  width: 18px;
  position: fixed;
  transform: translateX(940px);
  :hover,
  :focus {
    color: darkgray;
    text-decoration: none;
    cursor: pointer;
  }
  @media (max-width: 1000px) {
    position: absolute;
    right: 3%;
    transform: none;
  }
`;

const Modal = () => {
  const dispatch = useDispatch();

  const handleCloseClick = () => {
    dispatch(closeModal());
  };
  const { recipe } = useSelector((store) => ({
    recipe: store.recipe,
  }));
  return (
    <StyledWrapper>
      <Form recipe={recipe}>
        <StyledButtonClose onClick={handleCloseClick}>
          <FontAwesomeIcon icon={faWindowClose} />
        </StyledButtonClose>
      </Form>
    </StyledWrapper>
  );
};

export default Modal;
