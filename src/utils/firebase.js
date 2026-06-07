// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDirp2ytLgIFLMbhZSVpFhqi5YbnuUR_zQ",
  authDomain: "netflixgpt-dbb82.firebaseapp.com",
  projectId: "netflixgpt-dbb82",
  storageBucket: "netflixgpt-dbb82.firebasestorage.app",
  messagingSenderId: "929475191637",
  appId: "1:929475191637:web:1275ab568740f11086c5dc",
  measurementId: "G-29BH81LBMM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
