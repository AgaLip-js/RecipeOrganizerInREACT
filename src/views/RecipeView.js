import React from "react";
import Header from "../components/Header/Header";
import SimpleSlider from "../components/atoms/Carousel/Carousel";
import RecipeCard from "../components/atoms/RecipeCard/RecipeCard";
import Modal from "../components/Modal/Modal";
import { useSelector } from "react-redux";
import styled from "styled-components";

const RecipeView = () => {
  const { open } = useSelector((store) => ({
    open: store.open,
  }));
  const { recipies } = useSelector((store) => ({
    recipies: store.recipies,
  }));
  const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 32px;
    margin: 50px 50px;
    position: relative;
  `;
  return (
    <div>
      <Header />
      <SimpleSlider />
      <StyledContainer>
        {recipies.map((recipe) => (
          <RecipeCard
            image={recipe.image}
            ingredientsQuantity={recipe.ingredientsQuantity}
            portion={recipe.portion}
            preparingTime={recipe.preparingTime}
            title={recipe.title}
            date={recipe.date}
            id={recipe.id}
          />
        ))}
      </StyledContainer>

      {open && <Modal />}
    </div>
  );
};

export default RecipeView;