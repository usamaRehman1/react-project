import firebase from 'firebase';
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyApVFtAWHs9GLM_RdmC9_b-XR1a0jFYZS0",
    authDomain: "redux-todo-dade8.firebaseapp.com",
    projectId: "redux-todo-dade8",
    storageBucket: "redux-todo-dade8.appspot.com",
    messagingSenderId: "837052689934",
    appId: "1:837052689934:web:03b7dacd7758ea89a0165f",
    measurementId: "G-MH5F19HJ4H"
};

var Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase ;