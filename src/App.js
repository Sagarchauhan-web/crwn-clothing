import "./App.css";
import React from "react";
import { connect } from "react-redux";

import Homepage from "./components/homepage/homepage.component";
import Checkout from "./components/checkout/checkout.component";
import Shop from "./shop/shop.component";
import Header from "./header/header.component";
import SignInAndSignUp from "./sign-in-and-sign-up/sign-in-and-sign-up.component";

import { Route, Switch, Redirect } from "react-router-dom";

import { auth, createProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.props.setCurrentUser(
            {
              id: snapShot.id,
              ...snapShot.data(),
            },
            console.log(this.state)
          );
        });
      }
      this.props.setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/checkout" component={Checkout} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.userState ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userState: state.user.userState,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
