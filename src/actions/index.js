export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const ADD_RECIPE = "ADD_RECIPE";
export const ADD_MEAL = "ADD_MEAL";
export const CLOSE_MINI_MODAL = "CLOSE_MINI_MODAL";
export const OPEN_MINI_MODAL = "OPEN_MINI_MODAL";
export const REMOVE_MEAL = "REMOVE_MEAL";
export const EDIT_RECIPE = "EDIT_RECIPE";
export const REMOVE_RECIPE = "REMOVE_RECIPE";

export const openModal = (recipe) => (dispatch) => {
  dispatch({
    type: OPEN_MODAL,
    payload: {
      open: true,
      selectRecipe: recipe,
    },
  });
};
export const closeModal = () => (dispatch) => {
  dispatch({
    type: CLOSE_MODAL,
    payload: {
      open: false,
    },
  });
};
export const addRecipe = (newItem) => (dispatch) => {
  dispatch({
    type: ADD_RECIPE,
    payload: {
      newRecipe: newItem,
    },
  });
};
export const editRecipe = (editItem) => (dispatch) => {
  dispatch({
    type: EDIT_RECIPE,
    payload: {
      newRecipe: editItem,
    },
  });
};
export const removeRecipe = (removeItem) => (dispatch) => {
  dispatch({
    type: REMOVE_RECIPE,
    payload: {
      removeRecipe: removeItem,
    },
  });
};

export const updateMealDay = (newItem, date, type) => (dispatch) => {
  dispatch({
    type: ADD_MEAL,
    payload: {
      newMealDay: newItem,
      date: date,
      type: type,
    },
  });
};
export const removeMealDay = (date, type) => (dispatch) => {
  dispatch({
    type: REMOVE_MEAL,
    payload: {
      date: date,
      type: type,
    },
  });
};
export const closeMiniModal = () => (dispatch) => {
  dispatch({
    type: CLOSE_MINI_MODAL,
    payload: {
      open: false,
    },
  });
};
export const openMiniModal = (date, type) => (dispatch) => {
  dispatch({
    type: OPEN_MINI_MODAL,
    payload: {
      open: true,
      date: date,
      type: type,
    },
  });
};
