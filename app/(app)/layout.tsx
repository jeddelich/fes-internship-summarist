"use client";

import Sidebar from "@/components/layout/Sidebar";
import { ReactNode, useEffect, useState } from "react";
import LoginModal from "@/components/auth/LoginModal";
import SignUpModal from "@/components/auth/SignUpModal";
import ResetPasswordModal from "@/components/auth/ResetPasswordModal";
import useAuthModal from "@/components/hooks/useAuthModal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SearchBar from "@/components/layout/SearchBar";
import { AudioProvider } from "@/context/AudioContext";
import AudioManager from "@/components/ui/AudioManager";
import styles from "./layout.module.css"

export default function AppLayout({ children }: { children: ReactNode }) {
  const { activeModal, closeModal, openSignUp, openLogin, openResetPassword } =
    useAuthModal();
  const [visible, setVisible] = useState(false)
  const [toggleMenu, setToggleMenu] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <div className="flex min-h-screen">
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
      <AudioProvider>
        <AudioManager />
        <Sidebar openLogin={openLogin} visible={visible} toggleMenu={toggleMenu} setToggleMenu={() => setToggleMenu(false)} />
        <SearchBar handleMenu={() => setToggleMenu(!toggleMenu)} toggleMenu={toggleMenu}/>
        <div className={toggleMenu ? styles.background : undefined} onClick={() => setToggleMenu(false)}></div>
        <main className={styles.main}>{children}</main>
      </AudioProvider>
    </div>
 );
}
