import styles from "./LoginModal.module.css";

function ModalFooter({ setSignUpModalOpen, setLoginModalOpen, loginModalOpen, signUpModalOpen, resetPasswordModalOpen, setResetPasswordModalOpen, prompt }) {
  
  const openSignUpModal = (event) => {
    event.preventDefault();
    if (!resetPasswordModalOpen) {
    setLoginModalOpen(!loginModalOpen);
    setSignUpModalOpen(!signUpModalOpen);
    } else {
      setResetPasswordModalOpen(!resetPasswordModalOpen);
      setLoginModalOpen(!loginModalOpen);
    }
  };
  
  const openResetPasswordModal = (event) => {
    event.preventDefault();
    setLoginModalOpen(!loginModalOpen);
    setResetPasswordModalOpen(!resetPasswordModalOpen);
  };

  return (
    <div className={styles.footer}>
      {
        prompt === "Don't have an account? Sign up" && (
      <a href="" className={styles.link} onClick={openResetPasswordModal}>Forgot your password?</a>
      )}
      <a href="" className={styles.link} onClick={openSignUpModal}>{prompt}</a>
    </div>
  );
}

export default ModalFooter;
