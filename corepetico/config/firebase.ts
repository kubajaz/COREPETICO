import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD067xYxas7JSlQ9YFPPXJ2I6rb8jiR9eo", //process.env.FIREBASE_API_KEY,
  authDomain: "corepetico-1c6b6.firebaseapp.com",
  databaseURL: "https://corepetico-1c6b6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "corepetico-1c6b6",
  storageBucket: "corepetico-1c6b6.appspot.com",
  messagingSenderId: "908086707099",
  appId: "1:908086707099:web:2ce4f09a9834127c34573e"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const auth = getAuth()
////////
const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  })
}