// Import the functions you need from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyA_2Cj--bYSP4nV52zJJGLyVVWmKaxLlF0",
    authDomain: "exclusive-3df17.firebaseapp.com",
    projectId: "exclusive-3df17",
    storageBucket: "exclusive-3df17.firebasestorage.app",
    messagingSenderId: "502002174330",
    appId: "1:502002174330:web:601a37b1c4c59704c4aec3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore instance
const db = getFirestore(app);

export { db };
export default firebaseConfig 
