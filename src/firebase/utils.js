import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBMHKLrhZroz4jBJzHA6vlR_VcTCQ3XYec',
  authDomain: 'shopyfi-7be44.firebaseapp.com',
  databaseURL: 'https://shopyfi-7be44.firebaseio.com',
  projectId: 'shopyfi-7be44',
  storageBucket: '',
  messagingSenderId: '166576799543',
  appId: '1:166576799543:web:0f0ead33e2f6eb76'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    //create user
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log('error creating user', err);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const addCollectionsAndDocuments = async (collectionKey, data) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  data.forEach(elem => {
    const docRef = collectionRef.doc();

    batch.set(docRef, elem);
  });

  return await batch.commit();
};

//Google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
