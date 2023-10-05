import firebase from 'firebase';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDs1iLDD1XwHKkH6Xg3-9GlIWdXME2ayr8",
    authDomain: "login-signup-firebase-991d1.firebaseapp.com",
    projectId: "login-signup-firebase-991d1",
    storageBucket: "login-signup-firebase-991d1.appspot.com",
    messagingSenderId: "206601651659",
    appId: "1:206601651659:web:02269dddcd7f90e8a8624e"
};

const fire = firebase.initializeApp(firebaseConfig);

export default firebase;