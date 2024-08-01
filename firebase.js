// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// currently not supported
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkEMb_XrPTmMc8BpYrA-9CGyFAMMeskk4",
  authDomain: "inventory-management-9b4cf.firebaseapp.com",
  projectId: "inventory-management-9b4cf",
  storageBucket: "inventory-management-9b4cf.appspot.com",
  messagingSenderId: "402876869115",
  appId: "1:402876869115:web:8cabb613483f56bd35835e",
  measurementId: "G-0TJV8CD79Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}