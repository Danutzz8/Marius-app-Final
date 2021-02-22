import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDrCFtcvGct5-oxLlx4f8s42hMAHjRaTJ4",
    authDomain: "crown-db-b33d6.firebaseapp.com",
    databaseURL: "https://crown-db-b33d6-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "crown-db-b33d6",
    storageBucket: "crown-db-b33d6.appspot.com",
    messagingSenderId: "511235884669",
    appId: "1:511235884669:web:faa609676b59e69b311314",
    measurementId: "G-MRM4L68JVB"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;