import React from "react";
import "./checkout.style.scss";

import CheckoutItem from "./checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../stripe/stripe-button.component";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart.selector";
import { selectCartItemsTotal } from "../../redux/cart/cart.selector";

const Checkout = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} />
      ))}

      <div className="total">Total: ${total}</div>
      <div className="test-warning">
        *Please use the following credit card info for payment
        <br />
        4242 4242 4242 4242 - Exp: (current-date)01/20 - CVV: 123
      </div>
      <StripeCheckoutButton className="stripe-button" price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal,
});

export default connect(mapStateToProps)(Checkout);
