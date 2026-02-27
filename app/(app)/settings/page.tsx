"use client"

import styles from "./page.module.css";
import SettingsSection from "../../../components/settings/SettingsSection";
import { useAuth } from "@/context/AuthContext";
import SettingsLoggedOut from "@/components/settings/SettingsLoggedOut"
import useAuthModal from "@/components/hooks/useAuthModal";
import LoginModal from "@/components/auth/LoginModal";
import SignUpModal from "@/components/auth/SignUpModal";
import ResetPasswordModal from "@/components/auth/ResetPasswordModal"
import { getUser } from "@/services/firebaseFirestore";
import { useEffect, useState } from "react";

type FirestoreUser = {
  email: string,
  plan: string,
  accountCreated: Date
}

function Settings() {
  const { user } = useAuth();
  const [userData, setUserData] = useState<FirestoreUser | null>(null)
  const { openLogin, activeModal, closeModal, openSignUp, openResetPassword } = useAuthModal()

  useEffect(() => {
    if (user?.uid) {

      async function fetchUserData() {  
        const data = await getUser(user?.uid)
        setUserData(data as FirestoreUser | null)
      }

    fetchUserData()

    }

  }, [user?.uid])

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
          {user ? (
            <>
              <SettingsSection
                subtitle="Your Subscription Plan"
                content={userData?.plan}
                />
              <SettingsSection subtitle="Email" content={user.email === "guest@gmail.com" ? "summaristguest@gmail.com" : user.email} />
            </>) : (<>
              <SettingsLoggedOut openLogin={openLogin} />
            </>)
          }
        </div>
      </div>
    </div>
     </>
  );
}

export default Settings;
