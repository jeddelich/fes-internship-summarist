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
      alert("Account already exists. Please try logging in or using a different email instead! You can also reset your password if you've forgotten it.");
      document.getElementById("email").style.borderColor = "red";
    } else {
      alert("Password does not meet length requirements (8 - 64 characters). Please try again.");
      document.getElementById("password").style.borderColor = "red";
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
    document.querySelectorAll("input").forEach((input) => (input.style.borderColor = "red"));
  }
};

export const LogOut = async () => {
  
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error logging out:", error);
  }
};
