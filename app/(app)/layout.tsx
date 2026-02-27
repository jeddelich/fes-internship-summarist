"use client"

import Sidebar from "@/components/layout/Sidebar";
import { ReactNode } from "react";
import LoginModal from "@/components/auth/LoginModal";
import SignUpModal from "@/components/auth/SignUpModal";
import ResetPasswordModal from "@/components/auth/ResetPasswordModal";
import useAuthModal from "@/components/hooks/useAuthModal";

export default function AppLayout({ children }: { children: ReactNode }) {
  
   const {activeModal, closeModal, openSignUp, openLogin, openResetPassword } = useAuthModal()

  
return (
    <div className="flex h-screen">
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
      <Sidebar openLogin={openLogin} />
      <main className="flex-1 ml-50!">{children}</main>
    </div>
  );
}
