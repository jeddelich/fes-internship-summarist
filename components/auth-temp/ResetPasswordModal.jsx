import AccountForm from "./AccountForm";
import ModalQuestions from "./ModalQuestions";
import styles from "./LoginModal.module.css";
import { MdClose } from "react-icons/md";

function ResetPasswordModal({ closeModal, openLogin, activeModal }) {
  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <MdClose className={styles.closeIcon} onClick={() => closeModal()} />
        <h2 className={styles.title}>Reset your password</h2>
        <AccountForm type="Send reset password link" style={{cursor: "not-allowed"}} />
        <ModalQuestions
          prompt="Find your password? Back to login"
          openLogin={openLogin}
          activeModal={activeModal}
        />
      </div>
    </div>
  );
}

export default ResetPasswordModal;
