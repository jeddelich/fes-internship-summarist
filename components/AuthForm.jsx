import styles from "./AuthModal.module.css";

function AuthForm() {
  return (
    <form action="">
      <input type="email" placeholder="Email Address" className={styles.input} />
      <input type="password" placeholder="Password" className={styles.input} />
      <button className={styles.btn + " login--main"}>Login</button>
    </form>
  );
}

export default AuthForm;
