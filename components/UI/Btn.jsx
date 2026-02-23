import styles from "./Btn.module.css";

function Btn({ text, color, icon, type = "button", onClick }) {
  
  return (
    <div className={styles.btnWrapper}>
      <button className={`${styles.btn} ${color}`} type={type} onClick={onClick}>
      <figure className={styles.iconWrapper}>
        <img src={icon} className={styles.icon} alt="" />
      </figure>
        {text}
      </button>
    </div>
  );
}

export default Btn;
