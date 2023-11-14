// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEJ2-4Hzls1xeRdKpY0UOi0lA9v2pdNHI",
  authDomain: "bistro-9dbcf.firebaseapp.com",
  projectId: "bistro-9dbcf",
  storageBucket: "bistro-9dbcf.appspot.com",
  messagingSenderId: "151849274282",
  appId: "1:151849274282:web:043a8454d2f11b38bc79d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth