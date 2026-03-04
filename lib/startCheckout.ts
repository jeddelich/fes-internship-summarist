"use client";

import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db, auth } from "../services/firebase"

export async function startCheckout(priceId: string) {

  if (!auth.currentUser) {
    throw new Error("User not logged in");
  }

  const docRef = await addDoc(
    collection(db, "customers", auth.currentUser.uid, "checkout_sessions"),
    {
      price: priceId,
      mode: "subscription",
      success_url: window.location.origin + "/settings",
      cancel_url: window.location.origin + "/choose-plan",
    }
  );

  return new Promise((resolve, reject) => {
    const unsubscribe = onSnapshot(docRef, (snap) => {
      const data = snap.data();

      if (!data) return;

      if (data.error) {
        unsubscribe();
        reject(data.error);
      }

      if (data.url) {
        unsubscribe();
        window.location.assign(data.url);
        resolve(data.url);
      }
    });
  });
}