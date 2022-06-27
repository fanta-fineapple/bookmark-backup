import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: 'AIzaSyCEmD7JjawmWRw6zZK0kxCOg9dMiXxKpU4',
  authDomain: 'bookmark-74891.firebaseapp.com',
  projectId: 'bookmark-74891',
  storageBucket: 'bookmark-74891.appspot.com',
  messagingSenderId: '782904915914',
  appId: '1:782904915914:web:ec6c0d9c2411eada264133'
};

firebase.initializeApp(firebaseConfig);

export const dbService = firebase.firestore();
export const storageService = firebase.storage();