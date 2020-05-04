import React, { useState } from "react";
import styled from "styled-components";
import InputForm from "./Input/InputForm";
import InputImg from "./Input/InputImg";
import RecipeInfo from "./RecipeInfo";
import AddIngredients from "../AddIngredients/AddIngredients";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { addRecipe, closeModal } from "../../../actions";
import { v4 as uuidv4 } from "uuid";
import { getAllByPlaceholderText } from "@testing-library/react";

const StyledContent = styled.div`
  width: 1000px;
  overflow: auto;
  overflow-x: hidden;
  height: 90vh;
  background-color: white;
  margin: auto auto;
  padding: 10px;
  border: 1px solid #888;
  color: black;
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
    0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
  margin-top: 5vh;
`;
const StyledTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  grid-row: 2;
  margin: 0px;
`;
const StyledHeader = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: auto auto;
`;
const StyledModalForm = styled.div`
  display: grid;
  grid-auto-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  width: 100%;
`;
const StyledFirstColumn = styled.div`
  grid-column: 1;
  grid-row: 1;
  box-shadow: 0 0 10px #ccc;
  margin: 25px;
  padding: 10px 15px 10px 10px;
  vertical-align: top;
  margin-right: 0;
  height: 100%;
`;
const StyledSecondColumn = styled.div`
  grid-column: 2;
  grid-row: 1;
  box-shadow: 0 0 10px #ccc;
  margin: 25px;
  padding: 10px 10px 10px 15px;
  vertical-align: top;
  margin-left: 0;
  height: 100%;
`;

const Form = ({ children }) => {
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      console.log("GUNI");
      e.preventDefault();
      return false;
    }
  };
  const dispatch = useDispatch();

  const submitRecipe = (newItem) => {
    newItem.myIngredients = myIngredients;
    newItem.ingredientsQuantity = myIngredients.length;
    newItem.image = fileURL;
    newItem.date = addDate;

    dispatch(addRecipe(newItem));
    dispatch(closeModal());
  };

  const [myIngredients, setMyIngredients] = useState([]);
  const [fileURL, setfileURL] = useState(null);

  let newDate = new Date();
  let today = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  let addDate = `${today < 10 ? `0${today}` : `${today}`}.${
    month < 10 ? `0${month}` : `${month}`
  }.${year}`;

  const itemArray = {
    title: "",
    image: fileURL,
    link: "",
    category: "",
    preparingTime: "",
    ingredientsQuantity: myIngredients.length,
    portion: "",
    myIngredients: myIngredients,
    description: "",
    id: uuidv4(),
    date: addDate,
  };
  const [newItem, setNewItem] = useState(itemArray);

  const handleInputChange = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
    });
  };
  console.log(myIngredients.length);

  console.log(newItem);
  return (
    <StyledContent>
      <StyledHeader>
        {children}
        <StyledTitle>Dodaj Przepis</StyledTitle>
      </StyledHeader>
      <StyledModalForm>
        <StyledFirstColumn>
          <InputForm
            className="required"
            type="text"
            required="required"
            title="Tytuł przepisu"
            name="title"
            value={newItem.title}
            onChange={handleInputChange}
          />
          <InputImg
            // value={newItem.image}
            // onChange={handleInputChange}
            name="image"
            fileURL={fileURL}
            setfileURL={setfileURL}
          />
          <InputForm
            className="placeholder"
            type="text"
            placeholder=" "
            title="Link do przepisu (opcjonalnie)"
            name="link"
            onChange={handleInputChange}
            value={newItem.link}
          />
          <InputForm
            className="required"
            required="required"
            list="datalist_category"
            type="text"
            title="Stwórz lub wybierz kategorie"
            name="category"
            onChange={handleInputChange}
            value={newItem.category}
          />
          <RecipeInfo
            firstValue={newItem.przeparingTime}
            secondValue={myIngredients.length}
            thirdValue={newItem.portion}
            onChange={handleInputChange}
            firstName="preparingTime"
            secondName="ingredientsQuantity"
            thirdName="portion"
          />
          <AddIngredients
            onKeyDown={handleKeyDown}
            myIngredients={myIngredients}
            setMyIngredients={setMyIngredients}
          />
        </StyledFirstColumn>
        <StyledSecondColumn>
          <InputForm
            id="secondColumn"
            secondary
            placeholder=" "
            className="placeholder"
            title="Opis przygotowania"
            value={newItem.description}
            onChange={handleInputChange}
            name="description"
          />
          <Button type="button" onClick={() => submitRecipe(newItem)}>
            Zatwierdź
          </Button>
        </StyledSecondColumn>
      </StyledModalForm>
    </StyledContent>
  );
};

export default Form;
// onSubmit={(e) => submitRecipe(e, newItem)}
