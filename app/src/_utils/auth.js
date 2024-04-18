// app/src/_utils/auth.js
import { getAuth, createUserWithEmailAndPassword as createUser, signInWithEmailAndPassword as signIn, signOut, onAuthStateChanged } from 'firebase/auth';
import app from './firebase';

const auth = getAuth(app);

// Sign up with email/password
export const signUpWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUser(auth, email, password);
    console.log('Successfully created new user:', userCredential.user.uid);
    return userCredential.user;
  } catch (error) {
    console.error('Error creating new user:', error); 
    throw error;
  }
};

// Sign in with email/password
export const signInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signIn(auth, email, password);
    console.log('Successfully signed in user:', userCredential.user.uid);
    return userCredential.user;
  } catch (error) {
    console.error('Error signing in user:', error);
    throw error;
  }
};

// Sign out
export const firebaseSignOut = async () => {
  try {
    await signOut(auth);
    console.log('User signed out');
  } catch (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};

// Get current user
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};

export const getCurrentUserEmail = async () => {
  try {
    const user = await getCurrentUser();
    return user ? user.email : null;
  } catch (error) {
    console.error('Error getting current user:', error);
    throw error;
  }
};