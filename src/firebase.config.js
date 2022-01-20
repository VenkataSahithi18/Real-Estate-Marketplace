// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjMvvVet9TSsGYXTMsucewl_8B49jdgxg",
  authDomain: "house-marketplace-app-db4ea.firebaseapp.com",
  projectId: "house-marketplace-app-db4ea",
  storageBucket: "house-marketplace-app-db4ea.appspot.com",
  messagingSenderId: "853156816535",
  appId: "1:853156816535:web:6ee5d85f3106860e452bd2"
};

// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()
