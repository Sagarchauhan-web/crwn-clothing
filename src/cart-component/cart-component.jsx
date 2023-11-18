import React from "react";

import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toogleCart } from "../redux/cart/cart.action";
import { selectCartItemsCount } from "../redux/cart/cart.selector";

import "./cart-component.style.scss";

const CartIcon = ({ toogle, itemsCount }) => {
  return (
    <div className="cart-icon" onClick={() => toogle()}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toogle: () => dispatch(toogleCart()),
});

const mapStateToProps = (state) => ({
  itemsCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
