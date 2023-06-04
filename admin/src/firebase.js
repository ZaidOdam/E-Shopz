// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxDdm3-OEo9NJN5m-NbaeNAXCJPg8h5_A",
    authDomain: "e-shopz.firebaseapp.com",
    projectId: "e-shopz",
    storageBucket: "e-shopz.appspot.com",
    messagingSenderId: "988548723556",
    appId: "1:988548723556:web:323c7f858877b2ec6dc071"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;