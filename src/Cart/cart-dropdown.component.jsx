import React from "react";
import "./cart-dropdown.style.scss";

import { connect } from "react-redux";

import { withRouter } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "./cart-item/cart-item.component";

import { toogleCart } from "../redux/cart/cart.action";

import { selectCartItems } from "../redux/cart/cart.selector";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty_message"> Empty cart Click Add Cart</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toogleCart());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
