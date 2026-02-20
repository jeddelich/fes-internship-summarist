import styles from "./AuthModal.module.css";

function AuthBtn({ text, color, icon }) {
  return (
    <div className={styles.btnWrapper}>
      <button className={`${styles.btn} ${color}`}>
      <figure className={styles.iconWrapper}>
        <img src={icon} className={styles.icon} alt="" />
      </figure>
        {text}
      </button>
    </div>
  );
}

export default AuthBtn;
