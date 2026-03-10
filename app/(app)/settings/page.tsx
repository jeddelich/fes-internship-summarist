"use client";

import styles from "./page.module.css";
import SettingsSection from "../../../components/settings/SettingsSection";
import { useAuth } from "@/context/AuthContext";
import SettingsLoggedOut from "@/components/settings/SettingsLoggedOut";
import useAuthModal from "@/components/hooks/useAuthModal";
import LoginModal from "@/components/auth/LoginModal";
import SignUpModal from "@/components/auth/SignUpModal";
import ResetPasswordModal from "@/components/auth/ResetPasswordModal";
import { getUser, getUserSubscription } from "@/services/firebaseFirestore";
import { useEffect, useState } from "react";
import { auth } from "@/services/firebase";

type FirestoreUser = {
  email: string;
  plan: string;
  accountCreated: Date;
};

const PLAN_NAMES: Record<string, string> = {
  price_1T5hV8FfrSO4dTKFreZeB4wN: "Premium (Monthly)",
  price_1T5hUdFfrSO4dTKF6bzFeVf5: "Premium Plus (Yearly)",
};

function Settings() {
  const { user, loading } = useAuth();
  const [userData, setUserData] = useState<FirestoreUser | null>(null);
  const [subscription, setSubscription] = useState<any>(null);
  const { openLogin, activeModal, closeModal, openSignUp, openResetPassword } =
    useAuthModal();

  useEffect(() => {
    if (user?.uid) {
      async function fetchUserData() {
        const data = await getUser(user?.uid);
        setUserData(data as FirestoreUser | null);

        const sub = await getUserSubscription(user?.uid);
        setSubscription(sub);
      }

      fetchUserData();
      console.log(auth.currentUser);
    }
  }, [user?.uid]);

  const planName = subscription?.price?.id
    ? (PLAN_NAMES[subscription.price.id] ?? "Standard (Free)")
    : "Standard (Free)";

  return (
    <>
      {activeModal === "login" && (
        <LoginModal
          closeModal={closeModal}
          openSignUp={openSignUp}
          openResetPassword={openResetPassword}
          activeModal={activeModal}
        />
      )}
      {activeModal === "signup" && (
        <SignUpModal
          closeModal={closeModal}
          openLogin={openLogin}
          activeModal={activeModal}
        />
      )}
      {activeModal === "reset" && (
        <ResetPasswordModal
          closeModal={closeModal}
          openLogin={openLogin}
          activeModal={activeModal}
        />
      )}
      <div className={styles.settings}>
        <div className={styles.container}>
          <div className={styles.row}>
            <h1 className={styles.title}>Settings</h1>
            {loading ? (
              <>
                <hr className={styles.separator} />
                <div className={styles.loggedInSkeleton}>
                  <div className={styles.settingSkeleton}></div>
                  <div className={styles.contentSkeleton}></div>
                  <div className={styles.settingSkeleton}></div>
                  <div className={styles.contentSkeleton}></div>
                </div>
              </>
            ) : user ? (
              <>
                <SettingsSection subtitle="Membership:" content={planName} />
                <SettingsSection
                  subtitle="Email Account:"
                  content={
                    user.email === "guest@gmail.com"
                      ? "summaristguest@gmail.com"
                      : user.email
                  }
                />
              </>
            ) : (
              <>
                <SettingsLoggedOut openLogin={openLogin} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
