import { initializeApp, database, auth } from 'firebase';

const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};

export const firebaseImpl = initializeApp(config);
export const firebaseDatabase = database();
export const firebaseAuth = auth();
export const googleProvider = new auth.GoogleAuthProvider();
export const facebookProvider = new auth.FacebookAuthProvider();