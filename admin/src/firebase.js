// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYTEju3mbpLAW9vgU7g4LCKrSJvWxRmyQ",
  authDomain: "e-commerce-4bf00.firebaseapp.com",
  projectId: "e-commerce-4bf00",
  storageBucket: "e-commerce-4bf00.appspot.com",
  messagingSenderId: "213805456002",
  appId: "1:213805456002:web:bf773c9cb05a68d773b29b",
  measurementId: "G-HSZF4BSJ53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;