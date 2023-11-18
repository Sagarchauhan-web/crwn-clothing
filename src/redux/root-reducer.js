import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import userState from "./user/user.reducer"; //wrong naming
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userState,
  cart: cartReducer,
  directory: directoryReducer,
  items: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
