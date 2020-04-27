export const ADD_RECIPE_ACTION = 'ADD_RECIPE_ACTION';
export const ADD_GUNINA = 'ADD_GUNINA';

export const addRecipe = (myRecipe) => dispatch => {
    dispatch({
        type: ADD_RECIPE_ACTION,
        payload: {
            myRecipe: myRecipe
        }
    });
}
