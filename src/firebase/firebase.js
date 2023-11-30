// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDzZNpzUBKmH7yPz8TEjLtRSpmKchuPjwY',
  authDomain: 'react-next-shop-app-da087.firebaseapp.com',
  projectId: 'react-next-shop-app-da087',
  storageBucket: 'react-next-shop-app-da087.appspot.com',
  messagingSenderId: '317991145106',
  appId: '1:317991145106:web:cc92dedf43d3ab8c97604b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
