import firebase from "firebase";
const DB_CONFIG = {
  apiKey: "AIzaSyCzrXg8bQ7O-Nrwth9OjGKPQ-4qpbfJT6Y",
  authDomain: "taskapp-3aa36.firebaseapp.com",
  databaseURL: "https://taskapp-3aa36.firebaseio.com",
  projectId: "taskapp-3aa36",
  storageBucket: "taskapp-3aa36.appspot.com",
  messagingSenderId: "1041640682467",
  appId: "1:1041640682467:web:041a81d774d23f2621a6d6",
  measurementId: "G-RF63N6C66S",
};
const app = firebase.initializeApp(DB_CONFIG);

export default app;
