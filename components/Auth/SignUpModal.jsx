import Btn from "../UI/Btn";
import AccountForm from "./AccountForm";
import ModalFooter from "./ModalFooter";
import styles from "./LoginModal.module.css";
import { MdClose } from "react-icons/md";

function SignUpModal({ setSignUpModalOpen, setLoginModalOpen, loginModalOpen, signUpModalOpen }) {
  
    return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <MdClose
          className={styles.closeIcon}
          onClick={() => setSignUpModalOpen(false)}
        />
        <h2 className={styles.title}>Sign up to Summarist</h2>
        <Btn
          text="Sign up with Google"
          color={styles.lightBlue}
          icon="/logos/google__logo.png"
        />
        <div className={styles.separator}>
          <span className={styles.separatorText}>or</span>
        </div>
        <AccountForm type="Sign Up" />
        <ModalFooter
          prompt="Already have an account? Log in"
          setSignUpModalOpen={setSignUpModalOpen}
          setLoginModalOpen={setLoginModalOpen}
          signUpModalOpen={signUpModalOpen}
          loginModalOpen={loginModalOpen}
        />
      </div>
    </div>
  );
}

export default SignUpModal;
