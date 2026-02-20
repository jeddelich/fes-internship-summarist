import styles from "./AuthModal.module.css";

function AuthFooter() {
  return (
    <div className={styles.footer}>
      <a href="" className={styles.link}>Forgot your password?</a>
      <button>Don't have an account? Sign up</button>
    </div>
  );
}

export default AuthFooter;
