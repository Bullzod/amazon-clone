import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBjt_WsJGzlKRCb73M94fh3zFZO51AKSKY",
  authDomain: "fir-88c99.firebaseapp.com",
  databaseURL: "https://fir-88c99.firebaseio.com",
  projectId: "fir-88c99",
  storageBucket: "fir-88c99.appspot.com",
  messagingSenderId: "244895865679",
  appId: "1:244895865679:web:a299a4b8c982f4593b833a",
  measurementId: "G-30Z449F3DK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };