import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../firebase/firebase.utils";

import "./sign-in.style.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  changeHandler = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  change = (event) => {
    event.preventDefault();

    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h1>Already have an account</h1>
        <h2>sign in with email and password</h2>

        <form onSubmit={this.changeHandler}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            label="Email"
            changeHandler={this.change}
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            label="Password"
            changeHandler={this.change}
            required
          />

          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} googleSignIn>
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
