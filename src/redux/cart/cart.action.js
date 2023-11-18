import CardActionType from "./cart.types";

export const toogleCart = () => ({
  type: CardActionType.TOOGLE_DROPDOWN,
});

export const addItem = (item) => ({
  type: CardActionType.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CardActionType.REMOVE_ITEM,
  payload: item,
});

export const clearItem = (item) => ({
  type: CardActionType.CLEAR_CART_ITEM,
  payload: item,
});
