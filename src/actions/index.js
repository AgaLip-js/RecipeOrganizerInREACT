export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const ADD_RECIPE = "ADD_RECIPE";
export const ADD_MEAL = "ADD_MEAL";
export const CLOSE_MINI_MODAL = "CLOSE_MINI_MODAL";
export const OPEN_MINI_MODAL = "OPEN_MINI_MODAL";

export const openModal = () => (dispatch) => {
  dispatch({
    type: OPEN_MODAL,
    payload: {
      open: true,
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
