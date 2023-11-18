import React from "react";
import { connect } from "react-redux";

import "./header.style.scss";
import CartIcon from "../cart-component/cart-component";
import CartDropdown from "../Cart/cart-dropdown.component";
import { auth } from "../firebase/firebase.utils";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/crown.svg";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../redux/cart/cart.selector";
import { selectUserState } from "../redux/user/user.selector";

const Header = ({ userState, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {userState ? (
          <Link className="option" to="#" onClick={() => auth.signOut()}>
            SIGN OUT
          </Link>
        ) : (
          <Link className="option" to="/signIn">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

//// createStructuredSelector takes and passes state automaticaly
const mapStateToProps = createStructuredSelector({
  userState: selectUserState,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
