import Btn from "../UI/Btn";
import AccountForm from "./AccountForm";
import ModalFooter from "./ModalFooter";
import styles from "./LoginModal.module.css";
import { MdClose } from "react-icons/md";

function ResetPasswordModal({
  resetPasswordModalOpen,
  setResetPasswordModalOpen,
  setLoginModalOpen,
  loginModalOpen,
}) {
  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <MdClose
          className={styles.closeIcon}
          onClick={() => setResetPasswordModalOpen(false)}
        />
        <h2 className={styles.title}>Reset your password</h2>
        <AccountForm type="Send reset password link" />
        <ModalFooter
          prompt="Find out your password? Back to login"
          setLoginModalOpen={setLoginModalOpen}
          loginModalOpen={loginModalOpen}
          setResetPasswordModalOpen={setResetPasswordModalOpen}
          resetPasswordModalOpen={resetPasswordModalOpen}
        />
      </div>
    </div>
  );
}

export default ResetPasswordModal;
