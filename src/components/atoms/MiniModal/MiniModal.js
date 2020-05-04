import React, { useState } from "react";
import InputForm from "../Form/Input/InputForm";
import Button from "../Button/Button";
import InputImg from "../Form/Input/InputImg";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { closeMiniModal, updateMealDay } from "../../../actions";
import { useDispatch, useSelector } from "react-redux";

const StyledBackgroundWrapper = styled.div`
  background-color: grey;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 16;
`;
const StyledWrapper = styled.div`
  text-align: center;
  border: 1px solid lightgrey;
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
    0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 15;
  background: white;

  input {
    margin-top: 0px;
  }
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
  right: 2%;
  :hover,
  :focus {
    color: darkgray;
    text-decoration: none;
    cursor: pointer;
  }
`;
const StyledTitle = styled.p`
  padding-bottom: 10px;
`;

const MiniModal = () => {
  const dispatch = useDispatch();

  const miniModalClose = () => {
    dispatch(closeMiniModal());
  };
  const { date } = useSelector((store) => ({
    date: store.date,
  }));
  const { type } = useSelector((store) => ({
    type: store.type,
  }));

  const [fileURL, setfileURL] = useState(null);
  const newRecipe = {
    name: "",
    link: "",
    image: fileURL,
  };
  const [newMeal, setNewMeal] = useState(newRecipe);

  const handleInputChange = (e) => {
    setNewMeal({
      ...newMeal,
      [e.target.name]: e.target.value,
    });
  };
  const addMeal = (newMeal) => {
    newMeal.image = fileURL;
    console.log("add meal");
    console.log(newMeal);
    console.log(date);
    console.log(type);

    dispatch(updateMealDay(newMeal, date, type));
    dispatch(closeMiniModal());
  };

  return (
    <StyledBackgroundWrapper>
      <StyledWrapper>
        <StyledButtonClose onClick={miniModalClose}>
          <FontAwesomeIcon icon={faWindowClose} />
        </StyledButtonClose>
        <StyledTitle> Zaplanuj Posiłek</StyledTitle>
        <InputForm
          className="required"
          type="text"
          required="required"
          title="Podaj nazwę przepisu"
          name="name"
          value={newMeal.name}
          onChange={handleInputChange}
        />
        <InputForm
          className="placeholder"
          type="text"
          placeholder=" "
          title="Wklej link do przepisu (opcjonalnie)"
          name="link"
          value={newMeal.link}
          onChange={handleInputChange}
        />
        <InputImg name="image" fileURL={fileURL} setfileURL={setfileURL} />
        <Button
          secondary
          type="button"
          style={{ width: "150px" }}
          onClick={() => addMeal(newMeal)}
        >
          Dodaj przepis
        </Button>
      </StyledWrapper>
    </StyledBackgroundWrapper>
  );
};

export default MiniModal;
