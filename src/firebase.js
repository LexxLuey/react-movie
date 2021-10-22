import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBo_B3P9vdwGLJor73C50KWHukD2B2qpxY",
    authDomain: "react-movie-5e99b.firebaseapp.com",
    projectId: "react-movie-5e99b",
    storageBucket: "react-movie-5e99b.appspot.com",
    messagingSenderId: "747663254227",
    appId: "1:747663254227:web:3f99c8c3293e7025e7ea26",
    measurementId: "G-WG189VRQ9P"
  }; 

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;