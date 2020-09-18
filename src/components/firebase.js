import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCRk9iY-KymfxRFrZDPfqbiFkYDqr5VJ_Y',
  authDomain: 'react-slack-f7896.firebaseapp.com',
  databaseURL: 'https://react-slack-f7896.firebaseio.com',
  projectId: 'react-slack-f7896',
  storageBucket: 'react-slack-f7896.appspot.com',
  messagingSenderId: '969430923199',
  appId: '1:969430923199:web:e0f19d1cc71930d336130a',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
//a
export const signInWithGoogle = () => {
  //initialize google provider
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  //ask user to select gmail acc in a new pop window
  auth.signInWithPopup(googleProvider);
};

// // Firestore stuff
// export const firestore = firebase.firestore();
// window.firestore = firestore;
//store the data of user in firestore which is online db  which stores data in json format

export const createOrGetUserProfileDocument = async (user) => {
  if (!user) return;

  // check if a the user doc is there in DB with define the path which is id
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  // if no user exists in DB @ path 'userRef' then go and make one
  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;

    try {
      const user = {
        display_name: displayName,
        email,
        photo_url: photoURL,
        created_at: new Date(),
      };
      await userRef.set(user);
    } catch (error) {
      console.log('Error', error);
    }
  }
  return getUserDocument(user.uid);
};
//anything inside the firestore is basically a user document
async function getUserDocument(uid) {
  if (!uid) return null;

  try {
    const userDocument = await firestore.collection('user');
    return userDocument;
  } catch (error) {
    console.log('Error in getUserDocument', error.message);
  }
}
