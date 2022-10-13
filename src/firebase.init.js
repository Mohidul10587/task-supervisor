// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRHIe4fz3EPy_xLQfRF74iHTWDsHlt6Uc",
  authDomain: "task-supervisor.firebaseapp.com",
  projectId: "task-supervisor",
  storageBucket: "task-supervisor.appspot.com",
  messagingSenderId: "691701657888",
  appId: "1:691701657888:web:2db3be691b2357523ce745"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)