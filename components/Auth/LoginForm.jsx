import LoginBtn from "./LoginBtn";
import styles from "./LoginModal.module.css";

function LoginForm() {
  return (
    <form action="">
      <input type="email" placeholder="Email Address" className={styles.input} required />
      <input type="password" placeholder="Password" className={styles.input} required />
      <LoginBtn text="Login" color={styles.green}/>
    </form>
  );
}

export default LoginForm;
