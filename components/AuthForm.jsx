import AuthBtn from "./AuthBtn";
import styles from "./AuthModal.module.css";

function AuthForm() {
  return (
    <form action="">
      <input type="email" placeholder="Email Address" className={styles.input} />
      <input type="password" placeholder="Password" className={styles.input} />
      <AuthBtn text="Login" color={styles.green}/>
    </form>
  );
}

export default AuthForm;
