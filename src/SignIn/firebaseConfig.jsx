// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-mGIMsu9s9kJRFS5p16JvVUt4o9f6-qo",
  authDomain: "gemini--ai.firebaseapp.com",
  projectId: "gemini--ai",
  storageBucket: "gemini--ai.appspot.com",
  messagingSenderId: "132458640183",
  appId: "1:132458640183:web:f77fd73fb0ad308e9e60b2",
  measurementId: "G-WGV0KF9D4Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
