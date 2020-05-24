import React, { useState } from "react";
import Button from "../Button/Button";
import InputForm from "../Form/Input/InputForm";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import nextId from "react-id-generator";

const StyledWrapper = styled.div`
  padding-top: 10px;
`;
const StyledIngredientsList = styled.ul`
  list-style-type: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  justify-content: space-around;
`;
const StyledIngredient = styled.li`
  display: grid;
  font-size: 12px;
  text-align: start;
  grid-template-columns: 70% auto auto auto;
  height: 50px;
  align-items: center;
  justify-content: space-between;
`;
const StyledRemoveButton = styled.button`
  margin-left: 10px;
  height: 30px;
  font-size: 12px;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 5px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  color: #fff;
  border: solid 1px #f3a737;
  background: rgb(242, 162, 44);
  z-index: 11;
  display: flex;
`;
const StyledInput = styled.input`
  font-size: 12px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 150px;
  border: none;
  border-bottom: 1px solid #ccc;
  transition: 0.2s ease all;
`;

const AddIngredients = ({ myIngredients, setMyIngredients, ...props }) => {
  const [myInput, setInput] = useState("");
  const [myInputEdit, setInputEdit] = useState("");

  const [currentlyEditedID, setcurrentlyEditedID] = useState(false);

  const handleClick = () => {
    const newIngredient = {
      id: nextId(),
      name: myInput,
    };

    setMyIngredients([...myIngredients, newIngredient]);
    setInput("");
  };

  const handleEditClick = (id) => {
    const newIngredient = {
      id: id,
      name: myInputEdit,
    };
    setMyIngredients(
      myIngredients.map((ingredient) => {
        if (ingredient.id !== id) {
          return ingredient;
        } else {
          return newIngredient;
        }
      })
    );
    setInputEdit("");
    setcurrentlyEditedID(null);
  };

  const removeItem = (id) => {
    setMyIngredients(
      myIngredients.filter((ingredient) => ingredient.id !== id)
    );
  };
  const showInput = (id, name) => {
    return (
      <>
        <StyledInput
          id={id}
          placeholder={name}
          value={myInputEdit}
          onChange={(e) => setInputEdit(e.target.value)}
        ></StyledInput>
        <Button type="button" onClick={() => handleEditClick(id)}>
          Zapisz
        </Button>
      </>
    );
  };

  const checkFn = (id) => {
    setcurrentlyEditedID(id);
  };

  return (
    <StyledWrapper {...props}>
      <p>Składniki</p>
      <StyledIngredientsList>
        {myIngredients.map((ingredient) => (
          <StyledIngredient key={ingredient.id}>
            {currentlyEditedID === ingredient.id ? (
              showInput(ingredient.id, ingredient.name)
            ) : (
                <p>{ingredient.name}</p>
              )}
            <StyledRemoveButton
              type="button"
              onClick={() => checkFn(ingredient.id)}
            >
              <FontAwesomeIcon icon={faPencilAlt} />
            </StyledRemoveButton>
            <StyledRemoveButton
              type="button"
              onClick={() => removeItem(ingredient.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </StyledRemoveButton>
          </StyledIngredient>
        ))}
      </StyledIngredientsList>
      <InputForm
        className="placeholder"
        type="text"
        placeholder=" "
        value={myInput}
        title="Dodaj Składnik"
        onChange={(e) => setInput(e.target.value)}
      />
      <Button type="button" onClick={handleClick}>
        Dodaj składnik
      </Button>
    </StyledWrapper>
  );
};

export default AddIngredients;
