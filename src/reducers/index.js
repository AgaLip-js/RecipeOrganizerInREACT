import {
  OPEN_MODAL,
  CLOSE_MODAL,
  ADD_RECIPE,
  ADD_MEAL,
  CLOSE_MINI_MODAL,
  OPEN_MINI_MODAL,
  REMOVE_MEAL,
  EDIT_RECIPE,
  REMOVE_RECIPE,
} from "../actions";
import { initialRecipies } from "../models/initialRecipies";

const initialState = {
  open: false,
  recipies: initialRecipies,
  mealPlannerData: [],
  recipe: "",
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      return {
        ...state,
        open: action.payload.open,
        recipe: action.payload.selectRecipe,
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        open: action.payload.open,
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
    case ADD_RECIPE: {
      return {
        ...state,
        recipies: [...state.recipies, action.payload.newRecipe],
      };
    }
    case EDIT_RECIPE: {
      return {
        ...state,
        recipies: state.recipies.map((recipe) => {
          if (recipe.id === action.payload.newRecipe.id)
            return action.payload.newRecipe;

          return recipe;
        }),
      };
    }
    case REMOVE_RECIPE: {
      return {
        ...state,
        recipies: state.recipies.map((recipe) => {
          if (recipe.id === action.payload.removeRecipe.id) {
            return false;
          } else {
            return recipe;
          }
        }),
      };
    }

    case REMOVE_MEAL: {
      const pday = state.mealPlannerData.map((day) => {
        if (day.date === action.payload.date) {
          const editedDay = {
            ...day,
          };
          delete editedDay[action.payload.type];
          return editedDay;
        } else {
          return day;
        }
      });
      return {
        ...state,
        mealPlannerData: pday,
      };
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
      return state;
    }
    default:
      return state;
  }
};

export default mainReducer;
