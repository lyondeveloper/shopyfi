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

export const convertCollectionsToObj = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  // Por cada iteracion te ira creando una nueva propiedad en el objeto vacio dependiendo del titulo de la collection
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
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
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
