// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth }  from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAFARcrxw92TC0rVrxA6owYkWFo077w-uc",
  authDomain: "muse-5bbdd.firebaseapp.com",
  projectId: "muse-5bbdd",
  storageBucket: "muse-5bbdd.appspot.com",
  messagingSenderId: "433719785990",
  appId: "1:433719785990:web:2ed279bb4af7eb90eae187",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };

export default app;
