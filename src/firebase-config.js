import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQQSTkAY8GgJmwM6AVFqGror0ulLIq7A8",
  authDomain: "authentication-974ec.firebaseapp.com",
  projectId: "authentication-974ec",
  storageBucket: "authentication-974ec.appspot.com",
  messagingSenderId: "882452476567",
  appId: "1:882452476567:web:cdf32ae6f8b02d19192fd2",
  measurementId: "G-XDXKPHQS64",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
