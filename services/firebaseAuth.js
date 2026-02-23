"use client";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "@/services/firebase";

export const signUp = async (email, password) => {
  
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      alert("Email already in use. Please try logging in instead.");
    }
  }
};

export const LogIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
  } catch (error) {
    alert("Invalid email or password. Please try again.");
  }
};

export const LogOut = async () => {
  try {
    await signOut(auth);
    window.location.href = "http://localhost:3000/";
  } catch (error) {
    console.error("Error logging out:", error);
  }
};
