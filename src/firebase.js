// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTB1kdrlRVt61PPP1oHr94FLE-cHSrC50",
  authDomain: "knights-ddb20.firebaseapp.com",
  projectId: "knights-ddb20",
  storageBucket: "knights-ddb20.firebasestorage.app",
  messagingSenderId: "101460787889",
  appId: "1:101460787889:web:c91939c46ca19c202d5890",
  measurementId: "G-W3410SVBXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth }; // Export the auth instance to be used in other parts of the app
