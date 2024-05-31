import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD49BfhdOAAt1c_sVCFkYkAchpNtPlSC7Q",
  authDomain: "web-kelas-x-rpl.firebaseapp.com",
  projectId: "web-kelas-x-rpl",
  storageBucket: "web-kelas-x-rpl.appspot.com",
  messagingSenderId: "1017999840088",
  appId: "1:1017999840088:web:36ed1f96d964b036a40b2d",
  measurementId: "G-RGQCLRDQ02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
