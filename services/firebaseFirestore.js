"use client"

import { db } from "@/services/firebase"
import { doc, getDoc, setDoc, collection, query, where, getDocs } from "firebase/firestore"
import { auth } from "@/services/firebase"

export default async function managePlan(user) {

    await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        plan: "Basic",
        accountCreated: new Date().toLocaleDateString("en-US")
    })

}

export async function getUser(uid) {
    const userRef = doc(db, "users", uid)
    const userSnap = await getDoc(userRef)
    return userSnap.data()
}

export async function getUserSubscription(uid) {
    const user = auth.currentUser;
    if (!user) return null;

    const q = query(
        collection(db, `customers/${uid}/subscriptions`),
        where("status", "in", ["trialing", "active"])
    )

    const snapshot = await getDocs(q)

    if (snapshot.empty) return null

    return snapshot.docs[0].data();
}