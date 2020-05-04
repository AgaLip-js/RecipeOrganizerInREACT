import {
  OPEN_MODAL,
  CLOSE_MODAL,
  ADD_RECIPE,
  ADD_MEAL,
  CLOSE_MINI_MODAL,
  OPEN_MINI_MODAL,
} from "../actions";
import { initialRecipies } from "../models/initialRecipies";

const initialState = {
  open: false,
  recipies: initialRecipies,
  mealPlannerData: [],
  date: "",
  type: "",
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      return {
        ...state,
        open: action.payload.open,
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        open: action.payload.open,
      };
    }
    case ADD_RECIPE: {
      return {
        ...state,
        recipies: [...state.recipies, action.payload.newRecipe],
      };
    }
    case ADD_MEAL: {
      let foundDay = false;
      const pday = state.mealPlannerData.map((day) => {
        if (day.date === action.payload.date) {
          const editedDay = {
            ...day,
            [action.payload.type]: action.payload.newMealDay,
          };
          foundDay = true;
          return editedDay;
        } else {
          return day;
        }
      });

      if (foundDay) {
        return {
          ...state,
          mealPlannerData: pday,
        };
      } else {
        const newDay = {
          date: action.payload.date,
          [action.payload.type]: action.payload.newMealDay,
        };
        return {
          ...state,
          mealPlannerData: [...state.mealPlannerData, newDay],
        };
      }
    }
    case CLOSE_MINI_MODAL: {
      return {
        ...state,
        open: action.payload.open,
      };
    }
    case OPEN_MINI_MODAL: {
      return {
        ...state,
        open: action.payload.open,
        date: action.payload.date,
        type: action.payload.type,
      };
    }

    case "TEST": {
      console.log(state);
      return state;
    }
    default:
      return state;
  }
};

export default mainReducer;
