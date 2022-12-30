// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjHHQlphdlCvdIs_lzrs1IOy3L9J-8WFg",
  authDomain: "newcomputer-46e8b.firebaseapp.com",
  projectId: "newcomputer-46e8b",
  storageBucket: "newcomputer-46e8b.appspot.com",
  messagingSenderId: "363717924870",
  appId: "1:363717924870:web:74ba30055c87c231f6cb87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const initFirestoreApp = () => {
    return app
}