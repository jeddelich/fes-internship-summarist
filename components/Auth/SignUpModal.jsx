import LoginBtn from "./LoginBtn";
import LoginForm from "./LoginForm";
import LoginFooter from "./LoginFooter";
import styles from "./LoginModal.module.css";
import { MdClose } from "react-icons/md";

function SignUpModal({ setSignUpModalOpen }) {
  
    console.log("SignUpModal rendered");
  
    return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <MdClose
          className={styles.closeIcon}
          onClick={() => setSignUpModalOpen(false)}
        />
        <h2 className={styles.title}>Sign up to Summarist</h2>
        <LoginBtn
          text="Login with Google"
          color={styles.lightBlue}
          icon="/logos/google__logo.png"
        />
        <div className={styles.separator}>
          <span className={styles.separatorText}>or</span>
        </div>
        <LoginForm />
        <LoginFooter />
      </div>
    </div>
  );
}

export default SignUpModal;
