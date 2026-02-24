import styles from "./SidebarBtn.module.css";

function SidebarBtn({ text, redirect, LogOut, icon }) {
  return (
    <li>
      <button onClick={LogOut} className={styles.btn}>
        <figure className={styles.iconWrapper}>
          <i className={icon}></i>
        </figure>
        <div className={styles.text}>{text}</div>
      </button>
    </li>
  );
}

export default SidebarBtn;
