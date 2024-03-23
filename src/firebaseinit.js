import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Defining Configuration for the firebase store
const firebaseConfig = {
  apiKey: "AIzaSyBpww3TjPTfk2fxhhh_Uz4ITrWqnbdDyTQ",
  authDomain: "busy-buy-b04e6.firebaseapp.com",
  projectId: "busy-buy-b04e6",
  storageBucket: "busy-buy-b04e6.appspot.com",
  messagingSenderId: "112089803063",
  appId: "1:112089803063:web:090b42225c09bfb6c212b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
