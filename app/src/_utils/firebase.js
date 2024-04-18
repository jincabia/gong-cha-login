// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';


// // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };
// // Initialize Firebase






// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: NEXT_PUBLIC_FIREBASE_APP_ID
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export default app;

// NEXT_PUBLIC_FIREBASE_API_KEY="AIzaSyCg20CvbIEwd6BIHd4GNAUMcPfhNIO0kPk"
// NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="gong-cha---demo.firebaseapp.com"
// NEXT_PUBLIC_FIREBASE_PROJECT_ID="gong-cha---demo"
// NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="gong-cha---demo.appspot.com"
// NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="250475008218"
// NEXT_PUBLIC_FIREBASE_APP_ID="1:250475008218:web:324655c80256200d8515e3"