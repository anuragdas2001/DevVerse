// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuI7CrGGgHNh5j3AdAkrl5_KZQTeN9lSI",
  authDomain: "blogging-app-4e4a0.firebaseapp.com",
  projectId: "blogging-app-4e4a0",
  storageBucket: "blogging-app-4e4a0.appspot.com",
  messagingSenderId: "250005959727",
  appId: "1:250005959727:web:77c519cb8fb424ee0382da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);