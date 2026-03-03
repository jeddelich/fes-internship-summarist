"use client";

import { httpsCallable } from "firebase/functions";
import { functions } from "./firebase";
import { auth } from "./firebase"; 
export const purchase = async (priceId) => {
  
    try {
    console.log("PROJECT ID:", auth.currentUser);
    console.log("FUNCTIONS REGION:", functions._region);
    const createCheckout = httpsCallable(
      functions,
      "ext-firestore-stripe-payments-createCheckoutSession"
    );

    const res = await createCheckout({
      price: priceId,
      success_url: window.location.origin + "/success",
      cancel_url: window.location.origin + "/pricing",
    });

    window.location.href = res.data.url;
  } catch (err) {
    console.error("Stripe checkout error:", err);
    alert("Something went wrong. Please try again.");
  }
};