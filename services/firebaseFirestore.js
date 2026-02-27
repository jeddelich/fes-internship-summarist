"use client"

import { db } from "@/services/firebase"
import { doc, getDoc, setDoc } from "firebase/firestore"

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