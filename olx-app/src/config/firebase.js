import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyDpGn1E8aSDqrEmbItGyvF-7UOTU2yGDCQ",
  authDomain: "miniolx-1860d.firebaseapp.com",
  databaseURL: "https://miniolx-1860d.firebaseio.com",
  projectId: "miniolx-1860d",
  storageBucket: "miniolx-1860d.appspot.com",
  messagingSenderId: "878611664235",
  appId: "1:878611664235:web:751104141a26c383eb902e",
  measurementId: "G-W323DTW274"
};

var Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase ;