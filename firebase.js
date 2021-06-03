import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDxDXMbpeBg1GsV-TDi9c4bbaB0TaaGpbw",
    authDomain: "connect-react-native.firebaseapp.com",
    projectId: "connect-react-native",
    storageBucket: "connect-react-native.appspot.com",
    messagingSenderId: "231879413674",
    appId: "1:231879413674:web:39dad437bc92031561e5d3"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };