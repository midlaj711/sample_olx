import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBJ3NxXZhje24tytofN1z0y5pswZ_OWz5o",
    authDomain: "olxclone-3c992.firebaseapp.com",
    projectId: "olxclone-3c992",
    storageBucket: "olxclone-3c992.appspot.com",
    messagingSenderId: "978114972952",
    appId: "1:978114972952:web:851c051ee9373e7b15626d",
    measurementId: "G-R1YX0B5KJ3"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
