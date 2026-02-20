import LoginBtn from "./LoginBtn";
import LoginForm from "./LoginForm";
import LoginFooter from "./LoginFooter";
import styles from "./LoginModal.module.css";
import { MdClose } from "react-icons/md";

function LoginModal({ setLoginModalOpen, setSignUpModalOpen }) {
  
  return (
    <div className={styles.background}>
      <div className={styles.modal}>
            <MdClose className={styles.closeIcon} onClick={() => setLoginModalOpen(false)} />
            <h2 className={styles.title} >Log in to Summarist</h2>
            <LoginBtn text="Login as a Guest" color={styles.darkBlue} icon="/icons/user.svg"/>
            <div className={styles.separator}>
              <span className={styles.separatorText}>or</span>
            </div>
            <LoginBtn text="Login with Google" color={styles.lightBlue} icon="/logos/google__logo.png"/>
            <div className={styles.separator}>
              <span className={styles.separatorText}>or</span>
            </div>
            <LoginForm />
            <LoginFooter setSignUpModalOpen={setSignUpModalOpen} setLoginModalOpen={setLoginModalOpen} />
      </div>
    </div>
  );
}

export default LoginModal;
