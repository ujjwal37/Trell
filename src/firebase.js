import firebase from  'firebase';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyBlYp6g40jrI00Qi93yNYDH21BxXN7fSP0",
    authDomain: "admin-theatre.firebaseapp.com",
    databaseURL: "https://admin-theatre.firebaseio.com",
    projectId: "admin-theatre",
    storageBucket: "admin-theatre.appspot.com",
    messagingSenderId: "111864658565",
    appId: "1:111864658565:web:4684e7701bcd3416bf47ec"
  };
const fire = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { 
        storage , fire as default
}