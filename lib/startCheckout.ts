"use client";

import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db, auth } from "../services/firebase";

export async function startCheckout(priceId: string) {
  console.log("startCheckout called with:", priceId);

  if (!auth.currentUser) {
    throw new Error("User not logged in");
  }

  const sessionData: any = {
    mode: "subscription",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: window.location.origin + "/settings",
    cancel_url: window.location.origin + "/choose-plan",
  };

  if (priceId === "price_1T5hUdFfrSO4dTKF6bzFeVf5") {
    sessionData.trial_period_days = 7;
  }

  const docRef = await addDoc(
    collection(db, "customers", auth.currentUser.uid, "checkout_sessions"),
    sessionData,
  );

  return new Promise((resolve, reject) => {
    const unsubscribe = onSnapshot(docRef, (snap) => {
      const data = snap.data();
      console.log("checkout session update:", data);

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
