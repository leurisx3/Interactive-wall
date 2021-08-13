import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCdo5l09fKbTf2po9UoCkYwtsWzCjrdzwM",
    authDomain: "muro-interactivo-5d1e4.firebaseapp.com",
    projectId: "muro-interactivo-5d1e4",
    storageBucket: "muro-interactivo-5d1e4.appspot.com",
    messagingSenderId: "708496103600",
    appId: "1:708496103600:web:900792ebcd2c9428c64375"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
// export const auth = fb.auth();
export default fb;
