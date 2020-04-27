import { ADD_RECIPE_ACTION, ADD_GUNINA } from "../actions";

const initialState = {
    myRecipies: [],
    gunina: 'guniną'
};

const mainReducer = (state = initialState, action) => {

    console.log("***********************************************************************************")


    console.log("Initial state: ");
    console.log(initialState);

    console.log("State: ")
    console.log(state);

    console.log("Action: ");
    console.log(action);

    console.log("----------------------------------------------------------------------------------");


    switch (action.type) {
        case ADD_RECIPE_ACTION: {
            console.log("WYWOLALA SIE AKCJA DODAJ RECIPE")
            return {
                ...state,
                myRecipies: [...state.myRecipies, action.payload.myRecipe]
            }
        }
        case ADD_GUNINA: {
            console.log("WYWOLALA SIE AKCJA DODAJ GUNINA")
            return {
                ...state,

            }
        }
        case 'TEST': {
            console.log(state);
            return state;
        }
        default:
            return state;
    }
};

export default mainReducer;
