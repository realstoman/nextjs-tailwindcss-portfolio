// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxgH-8m_tT1ADTBapJnBKOWwTGY0pl4ow",
  authDomain: "nextjs-portfolio-14e81.firebaseapp.com",
  projectId: "nextjs-portfolio-14e81",
  storageBucket: "nextjs-portfolio-14e81.appspot.com",
  messagingSenderId: "404679167601",
  appId: "1:404679167601:web:ece5b91d63384428a295d0",
  measurementId: "G-6E72QCW28B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);