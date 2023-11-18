import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDrYySZsgwLdXlXkWQXdbhJWnpFlkbjpl8",
  authDomain: "crown-databas.firebaseapp.com",
  projectId: "crown-databas",
  storageBucket: "crown-databas.appspot.com",
  messagingSenderId: "354400929980",
  appId: "1:354400929980:web:ea8b2c2dc69b1ae5d1e8b9",
  measurementId: "G-3VK26E1F9Q",
};

export const createProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error in saving data", error.message);
    }
  }

  return userRef;
};

export const createCollectionsAndDocuments = async (
  collectionKey,
  collectionData
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  collectionData.forEach((obj) => {
    const newObj = collectionRef.doc();
    batch.set(newObj, obj);
  });

  return await batch.commit();
};

export const convertCollectionIntoMapObject = (snapshot) => {
  const transformedCollection = snapshot.docs.map((doc) => {
    const { items, title } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      items,
      title,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

// // initailizing the app
// firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// provider can be different like twitter or facebook and google;
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
