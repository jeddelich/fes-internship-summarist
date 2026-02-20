import styles from "./LoginModal.module.css";

function LoginFooter({ setSignUpModalOpen, setLoginModalOpen }) {
  
  const openSignUpModal = (event) => {
    event.preventDefault();
    setLoginModalOpen(false);
    setSignUpModalOpen(true);
  };

  return (
    <div className={styles.footer}>
      <a href="" className={styles.link}>Forgot your password?</a>
      <a href="" className={styles.link} onClick={openSignUpModal}>Don't have an account? Sign up</a>
    </div>
  );
}

export default LoginFooter;
