// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDivNFxwfQLDzLgT6aDgyBx2VT-zIUGG5U",
  authDomain: "assignment-12-156a9.firebaseapp.com",
  projectId: "assignment-12-156a9",
  storageBucket: "assignment-12-156a9.appspot.com",
  messagingSenderId: "158357634129",
  appId: "1:158357634129:web:acc389b03a2b2e570f0c70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
