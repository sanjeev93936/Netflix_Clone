// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCuYkIC66DHaX1_-01D9R3TvnPGTFV2xTo",
  authDomain: "react-netflix-clone-eefb8.firebaseapp.com",
  projectId: "react-netflix-clone-eefb8",
  storageBucket: "react-netflix-clone-eefb8.appspot.com",
  messagingSenderId: "766080858383",
  appId: "1:766080858383:web:45b0c9fe7aae68b424267a",
  measurementId: "G-8H262R5PBZ"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);