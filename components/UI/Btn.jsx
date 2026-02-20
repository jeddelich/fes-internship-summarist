import styles from "./Btn.module.css";

function Btn({ text, color, icon }) {
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

export default Btn;
