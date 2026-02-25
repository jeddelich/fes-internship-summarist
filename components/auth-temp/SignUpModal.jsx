import Btn from "../ui-temp/Btn";
import AccountForm from "./AccountForm";
import ModalQuestions from "./ModalQuestions";
import styles from "./LoginModal.module.css";
import { MdClose } from "react-icons/md";

function SignUpModal({ closeModal, openLogin, activeModal}) {

    return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <MdClose
          className={styles.closeIcon}
          onClick={() => closeModal()}
        />
        <h2 className={styles.title}>Sign up to Summarist</h2>
        <Btn
          text="Sign up with Google"
          color={styles.lightBlue}
          icon="/logos/google__logo.png"
          type="button"
          style={{ cursor : "not-allowed" }}
        />
        <div className={styles.separator}>
          <span className={styles.separatorText}>or</span>
        </div>
        <AccountForm type="Sign Up" />
        <ModalQuestions
          prompt="Already have an account? Log in"
            openLogin={openLogin}
            activeModal={activeModal}
        />
      </div>
    </div>
  );
}

export default SignUpModal;
