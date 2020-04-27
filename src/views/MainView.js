import React from "react";
import Header from "../components/Header";
import SimpleSlider from "../components/atoms/Carousel";
import RecipeCard from "../components/atoms/RecipeCard/RecipeCard";

const MainView = () => {
  // const dispatch = useDispatch();
  // const handleAddClick = () => {
  //   console.log("KLIKNALEM DODAJ PRZEPIS AKCJE");

  //   const myRecipe = {
  //     id: 1,
  //     name: 'Przepis na sernik',
  //     składniki: ' 1kg mąki , 1kg sera'
  //   }

  //   dispatch(addRecipe(myRecipe));
  // }

  return (
    <div>
      <Header />
      <SimpleSlider />
      <RecipeCard />
      <div>Guni Guni Guni</div>
    </div>
  );
};

export default MainView;
