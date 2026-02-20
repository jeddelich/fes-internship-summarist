import AuthBtn from "@/components/AuthBtn";
import AuthForm from "@/components/AuthForm";
import AuthFooter from "@/components/AuthFooter";
import styles from "./AuthModal.module.css";
import { MdClose } from "react-icons/md";

function AuthModal() {
  return (
    <div className={styles.background}>
      <div className={styles.modal}>
            <MdClose className={styles.closeIcon} />
            <h2 className={styles.title} >Log in to Summarist</h2>
            <AuthBtn text="Login as a Guest" color={styles.darkBlue}/>
            <div className={styles.separator}>
              <span className="modal__separator--text">or</span>
            </div>
            <AuthBtn text="Login with Google" color={styles.lightBlue}/>
            <div className={styles.separator}>
              <span className="modal__separator--text">or</span>
            </div>
            <AuthForm />
            <AuthFooter />
      </div>
    </div>
  );
}

export default AuthModal;
