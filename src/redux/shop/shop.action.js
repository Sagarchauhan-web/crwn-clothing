import shopActionTypes from "./shop.actionTypes";

import {
  firestore,
  convertCollectionIntoMapObject,
} from "../../firebase/firebase.utils";

export const fetchCollectionStart = () => ({
  type: shopActionTypes.FETCH_COLLECTION_START,
});

export const fetchCollectionSuccess = (data) => ({
  type: shopActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: data,
});

export const fetchCollectionError = (data) => ({
  type: shopActionTypes.FETCH_COLLECTION_ERROR,
  payload: data,
});

export const fetchCollectionStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collection");
    dispatch(fetchCollectionStart);

    collectionRef
      .get()
      .then(async (snapshot) => {
        const collections = convertCollectionIntoMapObject(snapshot);
        dispatch(fetchCollectionSuccess(collections));
      })
      .catch((err) => dispatch(fetchCollectionError(err)));
  };
};
