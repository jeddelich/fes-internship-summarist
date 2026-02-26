import Btn from "../ui/Btn";
import AccountForm from "./AccountForm";
import ModalQuestions from "./ModalQuestions";
import styles from "./LoginModal.module.css";
import { MdClose } from "react-icons/md";
import { LogIn } from "../../services/firebaseAuth";

function LoginModal({ closeModal, openSignUp, openResetPassword, activeModal}) {

  function handleGuestLogin(e) {
    e.preventDefault();
    closeModal()
    LogIn("guest@gmail.com", "guest123");
  }

  return (
    <div className={styles.background}>
      <div className={`${styles.modal} + ${styles.loginModal}`}>
        <MdClose
          className={styles.closeIcon}
          onClick={() => closeModal()}
        />
        <h2 className={styles.title}>Log in to Summarist</h2>
        <Btn
          text="Login as a Guest"
          color={styles.darkBlue}
          icon="/icons/user.svg"
          onClick={handleGuestLogin}
        />
        <div className={styles.separator}>
          <span className={styles.separatorText}>or</span>
        </div>
        <Btn
          text="Login with Google"
          color={styles.lightBlue}
          icon="/logos/google__logo.png"
          style={{ cursor : "not-allowed" }}
        />
        <div className={styles.separator}>
          <span className={styles.separatorText}>or</span>
        </div>
        <AccountForm type="Login" closeModal={closeModal}/>
        <ModalQuestions
          prompt="Don't have an account? Sign up"
          openSignUp={openSignUp}
          openResetPassword={openResetPassword}
          activeModal={activeModal}
        />
      </div>
    </div>
  );
}

export default LoginModal;
