import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";  
import { auth } from "@/services/firebase";
  
export const signUp = async (email, password) => {
    try{
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    window.location.href = "http://localhost:3000/for-you";
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
      alert("Email already in use. Please try logging in instead.");
  }
  }}

export const LogIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "http://localhost:3000/for-you";
  } catch (error) {
    alert("Invalid email or password. Please try again.");
  }}