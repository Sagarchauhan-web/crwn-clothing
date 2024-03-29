import shopActionTypes from "./shop.actionTypes";

const INITIAL_STATE = {
  collections: null,
  isFetching: true,
  errMessage: "",
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true,
      };
    case shopActionTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case shopActionTypes.FETCH_COLLECTION_ERROR:
      return {
        ...state,
        isFetching: false,
        errMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
