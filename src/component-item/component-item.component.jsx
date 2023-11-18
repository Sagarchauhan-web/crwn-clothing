import React from "react";
import { connect } from "react-redux";

import { addItem } from "../redux/cart/cart.action";

import CustomButton from "../custom-button/custom-button.component";
import "./component-item.style.scss";

const ComponentItem = ({ item, addItem }) => {
  const { price, name, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name.toUpperCase()}</span>
        <span className="price">{price}$</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add To Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ComponentItem);
