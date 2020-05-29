import React, { useState, useEffect } from "react";
import Button from "../components/atoms/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPencilAlt,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import InputForm from "../components/atoms/Form/Input/InputForm";
import styled from "styled-components";
import "./ShoppingListView.css";
import { v4 as uuidv4 } from "uuid";

const StyledContainerBox = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 40px;
`;
const StyledContainer = styled.div`
  position: relative;
`;

const StyledWrapper = styled.div`
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  opacity: 0.95;
  width: 600px;
  @media (max-width: 750px) and (min-width: 500px) {
    width: 500px;
  }
  @media (max-width: 500px) {
    width: 300px;
  }
`;
const StyledTitle = styled.h2`
  width: 100%;
  text-align: center;
  background: #f88e11;
  margin: 0;
  padding: 20px;
  border-radius: 5px;
  color: white;
`;
const StyledIngredientsList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  flex-direction: column;
  margin: 0;
`;
const StyledIngredient = styled.li`
  display: grid;
  font-size: 12px;
  text-align: start;
  grid-template-columns: auto 70% auto auto auto;
  height: 50px;
  align-items: center;
  justify-content: space-between;
`;
const StyledItemContent = styled.p`
  padding: 10px 10px;
  list-style: none;
  width: 400px;
  overflow: hidden;
  display: flex;
  align-items: center;
  font-size: 14px;
  @media (max-width: 750px) {
    padding: 10px 30px;
  }
`;
const StyledItemHightlight = styled(StyledItemContent)`
  text-decoration: line-through;
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
  align-items: center;
`;
const StyledInput = styled.input`
  font-size: 14px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 150px;
  border: none;
  border-bottom: 1px solid #ccc;
  transition: 0.2s ease all;
  margin-left: 20px;
`;

const ShoppingListView = () => {
  let items = JSON.parse(localStorage.getItem("items")) || [];
  const [myInput, setInput] = useState("");
  const [myInputEdit, setInputEdit] = useState("");
  const [myIngredients, setMyIngredients] = useState(items);
  const [currentlyEditedID, setcurrentlyEditedID] = useState(false);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(myIngredients));
  }, [myIngredients]);

  const handleClick = () => {
    const newIngredient = {
      id: uuidv4(),
      name: myInput,
      done: false,
    };

    if (myInput !== "") {
      setMyIngredients([...myIngredients, newIngredient]);
      setInput("");
    }
  };
  const addEnterIngredient = (e) => {
    const newIngredient = {
      id: uuidv4(),
      name: myInput,
      done: false,
    };
    if (e.keyCode === 13 && myInput !== "") {
      setMyIngredients([...myIngredients, newIngredient]);
      setInput("");
    }
  };

  const CheckStatusFn = (e) => {
    const checkIngredient = {
      id: e.target.id,
      name: e.target.name,
      done: e.target.checked,
    };

    setMyIngredients(
      myIngredients.map((ingredient) => {
        if (ingredient.id !== e.target.id) {
          return ingredient;
        } else {
          return checkIngredient;
        }
      })
    );

    localStorage.setItem("items", JSON.stringify(myIngredients));
  };

  const handleEditClick = (id, done) => {
    const newIngredient = {
      id: id,
      name: myInputEdit,
      done: done,
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
    localStorage.setItem("items", JSON.stringify(myIngredients));
  };
  const showInput = (id, name, done) => {
    return (
      <>
        <StyledInput
          id={id}
          placeholder={name}
          value={myInputEdit}
          onChange={(e) => setInputEdit(e.target.value)}
        ></StyledInput>
        <Button type="button" onClick={() => handleEditClick(id, done)}>
          Zapisz
        </Button>
      </>
    );
  };

  const checkFn = (id) => {
    setcurrentlyEditedID(id);
  };

  const removeAll = () => {
    setMyIngredients([]);
  };

  return (
    <StyledContainerBox>
      <StyledContainer>
        <StyledWrapper>
          <StyledTitle>
            Lista zakupów
            <FontAwesomeIcon
              icon={faShoppingCart}
              style={{ marginLeft: "10px" }}
            />
          </StyledTitle>
          <p>Składniki</p>
          <StyledIngredientsList>
            {myIngredients.map((ingredient) => (
              <StyledIngredient key={ingredient.id}>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    className="checkbox_class"
                    name={ingredient.name}
                    onChange={CheckStatusFn}
                    id={ingredient.id}
                    checked={ingredient.done}
                  />
                  <span className="checkbox-custom"></span>
                </label>
                {currentlyEditedID === ingredient.id ? (
                  showInput(ingredient.id, ingredient.name, ingredient.done)
                ) : !ingredient.done ? (
                  <StyledItemContent>{ingredient.name}</StyledItemContent>
                ) : (
                  <StyledItemHightlight>{ingredient.name}</StyledItemHightlight>
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
            id="shoppingInput"
            primary
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={addEnterIngredient}
          />
          <Button secondary type="button" onClick={handleClick}>
            Dodaj składnik
          </Button>

          <Button secondary type="button" onClick={removeAll}>
            Wyczyść wszystko
          </Button>
        </StyledWrapper>
      </StyledContainer>
    </StyledContainerBox>
  );
};

export default ShoppingListView;
