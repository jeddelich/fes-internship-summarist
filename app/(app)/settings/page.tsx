"use client"

import styles from "./page.module.css";
import SettingsSection from "../../../components/settings/SettingsSection";
import { useAuth } from "@/context/AuthContext";
import SettingsLoggedOut from "@/components/settings/SettingsLoggedOut"
import useAuthModal from "@/components/hooks/useAuthModal";
import LoginModal
from "@/components/auth/LoginModal";

function Settings() {
  const { user } = useAuth();
  const { openLogin, activeModal, closeModal, openSignUp, openResetPassword } = useAuthModal()

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
    <div className={styles.settings}>
      <div className={styles.container}>
        <div className={styles.row}>
          <h1 className={styles.title}>Settings</h1>
          {user ? (
            <>
              <SettingsSection
                subtitle="Your Subscription Plan"
                content="placeholder"
                />
              <SettingsSection subtitle="Email" content="placeholder 2" />
            </>) : (<>
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
