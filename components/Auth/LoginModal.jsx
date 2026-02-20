import Btn from "../UI/Btn";
import AccountForm from "./AccountForm";
import ModalFooter from "./ModalFooter";
import styles from "./LoginModal.module.css";
import { MdClose } from "react-icons/md";

function LoginModal({
  setLoginModalOpen,
  setSignUpModalOpen,
  loginModalOpen,
  signUpModalOpen,
  resetPasswordModalOpen,
  setResetPasswordModalOpen
}) {
  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <MdClose
          className={styles.closeIcon}
          onClick={() => setLoginModalOpen(false)}
        />
        <h2 className={styles.title}>Log in to Summarist</h2>
        <Btn
          text="Login as a Guest"
          color={styles.darkBlue}
          icon="/icons/user.svg"
        />
        <div className={styles.separator}>
          <span className={styles.separatorText}>or</span>
        </div>
        <Btn
          text="Login with Google"
          color={styles.lightBlue}
          icon="/logos/google__logo.png"
        />
        <div className={styles.separator}>
          <span className={styles.separatorText}>or</span>
        </div>
        <AccountForm type="Login" />
        <ModalFooter
          prompt="Don't have an account? Sign up"
          signUpModalOpen={signUpModalOpen}
          setSignUpModalOpen={setSignUpModalOpen}
          loginModalOpen={loginModalOpen}
          setLoginModalOpen={setLoginModalOpen}
          resetPasswordModalOpen={resetPasswordModalOpen}
          setResetPasswordModalOpen={setResetPasswordModalOpen}
        />
      </div>
    </div>
  );
}

export default LoginModal;
