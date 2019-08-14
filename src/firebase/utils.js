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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
