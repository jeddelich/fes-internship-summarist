"use client";
import { LogOut } from "@/services/firebaseAuth"
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function dashboard() {

  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user && !loading) {
      router.push("/");
    }
  }, [user, loading, router]);

  if (loading) return <div>Loading...</div>;

  return (
    <a onClick={() => LogOut()}>logout</a>
  )
}
