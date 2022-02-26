// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9mXrGLvpRzLxQ2SM0Kk2iPKdSmZRHxn8",
  authDomain: "stock-tienda.firebaseapp.com",
  projectId: "stock-tienda",
  storageBucket: "stock-tienda.appspot.com",
  messagingSenderId: "447832325161",
  appId: "1:447832325161:web:4fd47197ad7f16d34eb038"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);