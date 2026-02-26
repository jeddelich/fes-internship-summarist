import styles from "./Btn.module.css";

function Btn({ text, color, icon, width, style, type = "button", onClick }) {
  return (
    <div className={width}>
      <button
        className={`${styles.btn} ${color}`}
        type={type}
        onClick={onClick}
        style={style}
      >
        {icon && (
          <figure className={styles.iconWrapper}>
            <img src={icon} className={styles.icon} alt="" />
          </figure>
        )}
        {text}
      </button>
    </div>
  );
}

export default Btn;
