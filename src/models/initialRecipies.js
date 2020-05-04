import recipe1 from "../assets/pictures/default-img.jpg";

import { v4 as uuidv4 } from "uuid";
export const initialRecipies = [
  {
    id: uuidv4(),
    image: recipe1,
    ingredientsQuantity: "5",
    portion: "4",
    preparingTime: "60",
    title: "Przepis 1",
    date: "03.05.2020",
  },
  {
    id: uuidv4(),
    image: recipe1,
    ingredientsQuantity: "10",
    portion: "4",
    preparingTime: "120",
    title: "Przepis 2",
    date: "03.05.2020",
  },
];
