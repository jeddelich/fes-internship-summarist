import styles from "./AuthModal.module.css";

function AuthFooter() {
  return (
    <div className={styles.footer}>
      <a href="" className={styles.link}>Forgot your password?</a>
      <a href="" className={styles.link}>Don't have an account? Sign up</a>
    </div>
  );
}

export default AuthFooter;
