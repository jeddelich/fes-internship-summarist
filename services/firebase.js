import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8wivVPxKtTDdtSR3jQN9KwJ7yQ6CUt_U",
  authDomain: "fes-internship-summarist.firebaseapp.com",
  projectId: "fes-internship-summarist",
  storageBucket: "fes-internship-summarist.firebasestorage.app",
  messagingSenderId: "501281328729",
  appId: "1:501281328729:web:bd5eba3e2f470eb142eb48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);