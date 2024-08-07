// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbcFcy28g-YLWGg9Ls_xltarqNGokRpvU",
  authDomain: "miniblog-pauli.firebaseapp.com",
  projectId: "miniblog-pauli",
  storageBucket: "miniblog-pauli.appspot.com",
  messagingSenderId: "521500036510",
  appId: "1:521500036510:web:b2a7b6b41c01d03d0fda8f",
  measurementId: "G-00VGGC4PNE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);