import CardActionType from "./cart.types";
import { checkingCartItem, removeCartItem } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CardActionType.TOOGLE_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CardActionType.ADD_ITEM:
      return {
        ...state,
        cartItems: checkingCartItem(state.cartItems, action.payload),
      };
    case CardActionType.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeCartItem(state.cartItems, action.payload),
      };
    case CardActionType.CLEAR_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default CartReducer;
