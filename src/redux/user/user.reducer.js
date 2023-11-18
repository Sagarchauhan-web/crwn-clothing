import userActionTypes from "./user.types";

const INITIAL_STATE = {
  userState: null,
};

const userState = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        userState: action.payload,
      };
    default:
      return state;
  }
};

export default userState;
