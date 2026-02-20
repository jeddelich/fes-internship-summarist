import Btn from "../UI/Btn";
import styles from "./LoginModal.module.css";

function AccountForm({ type }) {
  return (
    <form action="">
      <input type="email" placeholder="Email Address" className={styles.input} required />
      {
        type !== "Send reset password link" && (
          <input type="password" placeholder="Password" className={styles.input} required />)
      }    
      <Btn text={type} color={styles.green}/>
    </form>
  );
}

export default AccountForm;
