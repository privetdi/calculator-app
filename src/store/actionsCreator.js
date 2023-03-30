import { ACTIONS } from "./store";

export let getActionsSwitcher = () => {
  return { type: ACTIONS.SWITCHER};
};



export let getActionOnAddToDo = (item) => {
  return { type: ACTIONS.ADD_TO_DO, productList: item };
};

export let getActionRemoveFromBasket = (id) => {
  return { type: ACTIONS.REMOVE_FROM_BASKET, removeId: id };
};
