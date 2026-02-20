import styles from "./AuthModal.module.css";

function AuthBtn({ text, color }) {
  console.log(color);
  return (
    <div className={styles.btnWrapper}>
      <i></i>
      <button className={`${styles.btn} ${color}`}>
        {text}
      </button>
    </div>
  );
}

export default AuthBtn;
