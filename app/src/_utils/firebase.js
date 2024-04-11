// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';


// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   };
// // Initialize Firebase






// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC51iD4UHDGJH3Os4IZeQv6GNuvM3EMYFc",
  authDomain: "gong-cha---demo.firebaseapp.com",
  projectId: "gong-cha---demo",
  storageBucket: "gong-cha---demo.appspot.com",
  messagingSenderId: "250475008218",
  appId: "1:250475008218:web:324655c80256200d8515e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export default app;



// import { useEffect, useState } from 'react';
// import { initializeApp } from 'firebase/app';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// // import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyC51iD4UHDGJH3Os4IZeQv6GNuvM3EMYFc",
//   authDomain: "gong-cha---demo.firebaseapp.com",
//   projectId: "gong-cha---demo",
//   storageBucket: "gong-cha---demo.appspot.com",
//   messagingSenderId: "250475008218",
//   appId: "1:250475008218:web:324655c80256200d8515e3"
// };

// const firebaseApp = initializeApp(firebaseConfig);
// // const firestore = getFirestore(/firebaseApp);
// const auth = getAuth(firebaseApp);

// function MyApp({ Component, pageProps }) {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setUser(user);
//     });

//     return () => unsubscribe();
//   }, []);

//   return (
//     <Component {...pageProps} firebase={firebaseApp} auth={auth} user={user} />
//   );
// }

// export default MyApp;
// export {firebaseApp}
