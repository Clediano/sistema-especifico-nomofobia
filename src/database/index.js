import { initializeApp, database, auth } from 'firebase';

const config = {
    apiKey: "AIzaSyAjDWMliNSoX0Pp4FMplu3POLhuJuFk7ck",
    authDomain: "nomofobia-dc2fd.firebaseapp.com",
    databaseURL: "https://nomofobia-dc2fd.firebaseio.com",
    projectId: "nomofobia-dc2fd",
    storageBucket: "nomofobia-dc2fd.appspot.com",
    messagingSenderId: "641099942461"
};

export const firebaseImpl = initializeApp(config);
export const firebaseDatabase = database();
export const firebaseAuth = auth();
export const googleProvider = new auth.GoogleAuthProvider();
export const facebookProvider = new auth.FacebookAuthProvider();